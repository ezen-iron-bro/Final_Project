import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// localStorage.clear();
export const getCommunity = createAsyncThunk("community/getCommunity", async () => {
  const res = await axios.get(
    "https://gist.githubusercontent.com/habi-er/e3cb49b98333e0590fb9a55ea65c002f/raw/8a6df924b1dd0bdd907915820eccec651cb3a501/communityData.json"
  );
  return res.data;
});
const initialState = localStorage.getItem("communityData")
  ? JSON.parse(localStorage.getItem("communityData"))
  : {
      data: [],
      newData: {
        title: "",
        category: "",
        date: "",
        Author: "",
        content: "",
        viewCount: 0,
        islike: false,
        ishate: false,
        likeCount: 0,
        hateCount: 0,
        comment: [],
      },
      loading: true,
      state: null,
      no: 4,
      commentNo: 0,
      replyNo: 0,
      filteredData: null,
      error: null,
      sortedByComments: [],
      sortedByViews: [],
    };

export const commuSlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    onSearch(state, action) {
      const { keyword, searchType } = action.payload;
      const lowercasedKeyword = keyword.toLowerCase();

      const titleSearch = post => post.title.toLowerCase().includes(lowercasedKeyword);
      const contentSearch = post => post.content.toLowerCase().includes(lowercasedKeyword);
      const authorSearch = post => post.Author.toLowerCase().includes(lowercasedKeyword);

      if (lowercasedKeyword === "") {
        state.filteredData = null;
      } else {
        state.filteredData = state.data.filter(post => {
          switch (searchType) {
            case "title":
              return titleSearch(post);
            case "content":
              return contentSearch(post);
            case "title_and_content":
              return titleSearch(post) || contentSearch(post);
            case "author":
              return authorSearch(post);
            default:
              return false;
          }
        });
      }
    },
    onListAdd(state, action) {
      const { newData, userId } = action.payload;
      const today = new Date();
      const date = today.toISOString().substring(0, 10);
      state.data.push({
        ...newData,
        id: state.no++,
        date,
        Author: userId,
        viewCount: 0,
        islike: false,
        ishate: false,
        likeCount: 0,
        hateCount: 0,
        comment: [],
      });
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    changeInput(state, action) {
      const { name, value } = action.payload;
      state.newData[name] = value;
    },
    upLike(state, action) {
      state.data = state.data.map(item =>
        item.id === action.payload.id ? { ...item, likeCount: item.likeCount + 1 } : item
      );
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    upHate(state, action) {
      state.data = state.data.map(item =>
        item.id === action.payload.id ? { ...item, hateCount: item.hateCount + 1 } : item
      );
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    upViewCount(state, action) {
      state.data = state.data.map(item =>
        item.id === action.payload.id ? { ...item, viewCount: item.viewCount + 1 } : item
      );
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    commentAdd(state, action) {
      const { detailItemId, commentText, userId } = action.payload;
      const today = new Date();
      const commentDate = today.toISOString().substring(0, 10);
      state.data = state.data.map(item =>
        item.id === detailItemId
          ? {
              ...item,
              comment: [
                ...item.comment,
                {
                  commentId: item.comment.length + 1,
                  commentText: commentText,
                  commentAuthor: userId,
                  commentDate,
                  commentIslike: false,
                  commentLikeCount: 0,
                  commentReply: [],
                },
              ],
            }
          : item
      );
      localStorage.setItem("communityData", JSON.stringify(state));
    },

    replyAdd(state, action) {
      const { detailItemId, commentId, replyText, userId } = action.payload;
      const today = new Date();
      const replyDate = today.toISOString().substring(0, 10);
      state.data = state.data.map(item => {
        if (item.id !== detailItemId) {
          return item;
        }

        return {
          ...item,
          comment: item.comment.map(comment => {
            if (comment.commentId !== commentId) {
              return comment;
            }

            return {
              ...comment,
              commentReply: [
                ...comment.commentReply,
                {
                  replyId: comment.commentReply.length + 1,
                  replyAuthor: userId,
                  replyDate,
                  replyText,
                },
              ],
            };
          }),
        };
      });
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    commentUpLike(state, action) {
      const { detailItemId, commentId } = action.payload;
      state.data = state.data.map(post => {
        if (post.id === detailItemId) {
          return {
            ...post,
            comment: post.comment.map(comment =>
              comment.commentId === commentId ? { ...comment, commentLikeCount: comment.commentLikeCount + 1 } : comment
            ),
          };
        }
        return post;
      });
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    commentDownLike(state, action) {
      const { detailItemId, commentId } = action.payload;
      state.data = state.data.map(post => {
        if (post.id === detailItemId) {
          return {
            ...post,
            comment: post.comment.map(comment =>
              comment.commentId === commentId ? { ...comment, commentLikeCount: comment.commentLikeCount - 1 } : comment
            ),
          };
        }
        return post;
      });
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    categorySort(state, action) {
      console.log(action.payload);
      if (action.payload === "전체") {
        state.filteredData = null;
      } else {
        state.filteredData = state.data.filter(post => post.category === action.payload);
      }
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    likeSort(state, action) {
      const sortedData = state.data.slice().sort((a, b) => b.likeCount - a.likeCount);
      state.filteredData = sortedData;
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    recentSort(state, action) {
      const sortedData = state.data.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
      state.filteredData = sortedData;
      localStorage.setItem("communityData", JSON.stringify(state));
    },
    viewSort(state, action) {
      const sortedData = state.data.slice().sort((a, b) => b.viewCount - a.viewCount);
      state.filteredData = sortedData;
      localStorage.setItem("communityData", JSON.stringify(state));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCommunity.pending, (state, action) => {
        state.loadingData = true;
      })
      .addCase(getCommunity.fulfilled, (state, action) => {
        state.loadingData = false;
        state.data = action.payload;
        state.sortedByComments = [...state.data].sort((a, b) => b.comment.length - a.comment.length);
        state.sortedByViews = [...state.data].sort((a, b) => b.viewCount - a.viewCount);
      })
      .addCase(getCommunity.rejected, (state, action) => {
        state.loadingData = false;
        state.error = action.error.message;
      });
  },
});

export const {
  onSearch,
  onListAdd,
  changeInput,
  upLike,
  upHate,
  upViewCount,
  commentAdd,
  replyAdd,
  commentUpLike,
  commentDownLike,
  categorySort,
  likeSort,
  recentSort,
  viewSort,
} = commuSlice.actions;
export default commuSlice.reducer;
