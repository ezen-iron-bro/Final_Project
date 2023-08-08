import { styled } from "styled-components";

export const WrapContainer = styled.div`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin: auto;
  .inner {
    width: 80%;
    margin: auto;
  }
`;
export const NavBarContanier = styled.nav`
  .gnb {
    display: flex;
    li {
      position: relative;
      box-sizing: border-box;
      display: block;
      height: 80px;
      line-height: 80px;

      > a {
        font-size: 13px;
        padding: 8px 20px;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
        &:hover {
          background-color: #333;
        }
      }
      i {
        vertical-align: middle;
      }
      .sub-menu {
        min-width: 100%;
        position: absolute;
        z-index: 10;
        left: 0;
        top: 70px;
        border-top: 5px solid #ff4456;
        border-radius: 5px;
        background-color: #292929;
        display: none;
        &.on {
          display: block;
          white-space: nowrap;
          padding: 20px;
          box-sizing: border-box;
          display: inline-block;
          a {
            font-size: 12px;
            font-weight: 400;
            color: #999;
            display: block;
            width: 100%;
            p {
              margin-bottom: 10px;
              line-height: 1.6;
              margin-bottom: 10px;
              width: 100%;
              padding: 10px 120px 10px 10px;
              box-sizing: border-box;
              border-radius: 8px;
              &:hover {
                background-color: #444444;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
            p:hover {
              color: #fff;
            }
          }
        }

        &.onlyLine {
          display: block;
        }
      }
    }
  }
`;
export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 10010;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #111;
  display: flex;
  justify-content: space-between;
  .header-left {
    margin-left: 40px;
    display: flex;
    align-items: center;
    h1 {
      margin-right: 15px;
      img {
        width: 80px;
        transition: 0.5s;
      }
    }
  }
  .header-right {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    span {
      display: inline-block;
      vertical-align: middle;
      font-weight: 600;
      box-sizing: border-box;
      margin-right: 5px;
      position: relative;
    }
    .search {
      input {
        width: 20px;
        padding: 10px 23px;
        background-color: #252525;
        border-radius: 17px;
        outline: none;
        border: none;
        box-sizing: border-box;
        font-size: 22px;
        color: #fff;
        transition: 1s ease-out;
      }
      .xi-search {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 28px;
        padding: 10px;
        transition: 1s steps();
      }
      &.on {
        input {
          width: 250px;
          text-indent: 25px;
        }
        .xi-search {
          position: absolute;
          top: 50%;
          left: 0px;
          transform: translateY(-50%);
        }
      }
    }
    .close-btn {
      position: absolute;
      top: 50%;
      right: 220px;
      transform: translateY(-50%);
      width: 55px;
      height: 55px;
      cursor: pointer;
      visibility: hidden;
      background-color: transparent;
      .xi-close-thin {
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: 600;
        color: #7e7e7e;
        font-size: 26px;
        transform: translate(100%, -50%);
        cursor: pointer;
        opacity: 0;
        transition: 1s;
        &.on {
          left: 80px;
        }
      }
    }
    .global {
      width: 30px;
      height: 30px;
      border-radius: 10px;
      vertical-align: middle;
      cursor: pointer;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        font-size: 20px;
      }
      &:hover {
        background-color: #252525;
      }
    }
    .play-now {
      display: inline;
      padding: 7px 21px;
      background: rgb(255, 55, 67);
      background: linear-gradient(90deg, rgba(255, 55, 67, 1) 0%, rgba(255, 117, 98, 1) 100%);
      color: #333;
      font-size: 14px;
      border-radius: 15px;
      cursor: pointer;
    }

    li {
      position: relative;
      box-sizing: border-box;
      display: block;
      height: 80px;
      line-height: 80px;

      > a {
        font-size: 13px;
        padding: 8px 20px;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
        background-color: #333;
      }
      i {
        vertical-align: middle;
      }
      .sub-menu {
        min-width: 100%;
        position: absolute;
        z-index: 10;
        right: 0;
        top: 70px;
        border-top: 5px solid #ff4456;
        border-radius: 5px;
        background-color: #292929;
        display: none;
        &.on {
          display: block;
          white-space: nowrap;
          padding: 20px;
          box-sizing: border-box;
          display: inline-block;
          a {
            font-size: 12px;
            font-weight: 400;
            color: #999;
            display: block;
            width: 100%;

            p {
              margin-bottom: 10px;
              line-height: 1.6;
              margin-bottom: 10px;
              width: 100%;
              padding: 10px 120px 10px 10px;
              box-sizing: border-box;
              border-radius: 8px;

              &:hover {
                background-color: #444444;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
            p:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
`;
export const LoginPopupContainer = styled.div`
  .bg-forPopup {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .popup-inner {
    position: fixed;
    z-index: 10010;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 20px;
    background-color: #0f1923;
    border-bottom: 1px solid #968d8c;
    border-top: 1px solid #968d8c;
    min-height: 256px;
    box-sizing: border-box;
    min-width: 66.7%;
    > span {
      position: absolute;
      right: 17px;
      top: 17px;
      display: inline-block;
      width: 60px;
      height: 60px;
      border: 1px solid #fff;
      cursor: pointer;

      &::after {
        content: "";
        display: inline-block;
        width: 4px;
        height: 4px;
        background: #fff;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
    svg {
      width: 60px;
      transition: 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .popup-title {
    h2 {
      line-height: 1.2;
      font-size: 30px;
      color: #f4f1ed;
      font-family: "BlackHanSans-Regular", sans-serif;
      margin-bottom: 80px;
      span {
        margin: 0 30px;
      }
    }
  }

  .popup-btn {
    display: block;
    display: flex;
    width: 600px;
    margin: auto;
    justify-content: center;
    align-items: center;
    min-width: 600px;
    height: auto;

    button {
      display: block;
      width: 100%;
      padding: 7px;
      color: #0f1923;
      box-sizing: border-box;
      background-color: transparent;
      outline: none;
      border: none;
      position: relative;
    }
    .signup {
      width: 50%;
      box-sizing: border-box;
      margin: 0 20px;
      > span {
        color: #f4f1ed;
        font-size: 14px;
      }
      .signup-btn {
        margin-top: 35px;
        color: #ece8e1;
        border: 0;
        cursor: pointer;
        padding: 7px;
        text-align: center;
        background: none;
        min-width: 256px;
        position: relative;
        width: auto;
        bottom: 27.5px;
        font-size: 14px;
        display: block;
        box-sizing: border-box;
        &::before {
          content: "";
          display: block;
          height: calc(50% - 4px);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border: 1px solid hsla(38, 22%, 90%, 0.5);
          border-bottom: 0;
          box-sizing: border-box;
        }
        &::after {
          content: "";
          display: block;
          height: calc(50% - 4px);
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          border: 1px solid hsla(38, 22%, 90%, 0.5);
          border-top: 0;
          box-sizing: border-box;
        }
        .btn-style {
          font-weight: 700;
          overflow: hidden;
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: calc(100% - 2px);
            background-color: #ece8e1;
            box-sizing: border-box;
          }
          &::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: calc(100% - 2px);
            height: 2px;
            background-color: #ece8e1;

            box-sizing: border-box;
          }
          .hover-mask {
            box-sizing: border-box;
            content: "";
            display: block;
            height: 100%;
            position: absolute;
            left: -5%;
            top: 0;
            width: 120%;
            z-index: 1;
            cursor: pointer;
            transition-duration: 0.3s, 0.3s;
            transition-timing-function: ease-out, ease-out;
            transition-delay: 0s, 0s;
            transition-property: transform, -webkit-transform;
            transform: translateX(-100%) skew(-10deg);
            background-color: #0f1923;
          }

          .signup-text {
            background-color: transparent;
            cursor: pointer;
            padding: 19px 30px;
            text-align: center;
            display: block;
            position: relative;
            z-index: 1;
            box-sizing: border-box;
            color: #0f1923;
            &::after {
              bottom: 0;
              content: "";
              display: block;
              position: absolute;
              height: 4px;
              width: 4px;
              transition: background-color 0.2s ease-in;
              background-color: #0f1923;
              right: 0;
              box-sizing: border-box;
            }
          }
          &:hover {
            .hover-mask {
              left: -5%;
              transform: translateX(0%) skew(-10deg);
              background-color: #0f1923;
            }
            .signup-text {
              color: #ece8e1;
              &::after {
                background-color: #fff;
              }
            }
          }
        }
      }
    }
    .login {
      width: 50%;
      box-sizing: border-box;
      margin: 0 20px;
      > span {
        color: #f4f1ed;
        font-size: 14px;
      }
      .login-btn {
        margin-top: 35px;
        color: #ece8e1;
        border: 0;
        cursor: pointer;
        padding: 7px;
        text-align: center;
        background: none;
        min-width: 256px;
        position: relative;
        width: auto;
        bottom: 27.5px;
        font-size: 14px;
        display: block;
        box-sizing: border-box;
        &::before {
          content: "";
          display: block;
          height: calc(50% - 4px);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border: 1px solid hsla(38, 22%, 90%, 0.5);
          border-bottom: 0;
          box-sizing: border-box;
        }
        &::after {
          content: "";
          display: block;
          height: calc(50% - 4px);
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          border: 1px solid hsla(38, 22%, 90%, 0.5);
          border-top: 0;
          box-sizing: border-box;
        }
        .btn-style {
          font-weight: 700;
          overflow: hidden;
          position: relative;
          &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: calc(100% - 2px);
            background-color: #ff4655;
            box-sizing: border-box;
          }
          &::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: calc(100% - 2px);
            height: 2px;
            background-color: #ff4655;
            box-sizing: border-box;
          }
          .hover-mask {
            box-sizing: border-box;
            content: "";
            display: block;
            height: 100%;
            position: absolute;
            left: -5%;
            top: 0;
            width: 120%;
            z-index: 1;
            cursor: pointer;
            transition-duration: 0.3s, 0.3s;
            transition-timing-function: ease-out, ease-out;
            transition-delay: 0s, 0s;
            transition-property: transform, -webkit-transform;
            transform: translateX(-100%) skew(-10deg);
            background-color: #0f1923;
          }

          .login-text {
            background-color: transparent;
            cursor: pointer;
            padding: 19px 30px;
            text-align: center;
            display: block;
            position: relative;
            z-index: 1;
            box-sizing: border-box;
            &::after {
              bottom: 0;
              content: "";
              display: block;
              position: absolute;
              height: 4px;
              width: 4px;
              transition: background-color 0.2s ease-in;
              background-color: #0f1923;
              right: 0;
              box-sizing: border-box;
            }
          }
          &:hover {
            .hover-mask {
              left: -5%;
              transform: translateX(0%) skew(-10deg);
              background-color: #0f1923;
            }
            .login-text {
              &::after {
                background-color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: url("./images/loginAndSignup/login_bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  .login-header {
    height: auto;
    h2 {
      margin-left: 40px;
      img {
        width: 165px;
      }
    }
  }
  .login-box {
    margin: auto;
    width: 460px;
    padding: 63px 54.2px;
    padding-bottom: 27px;
    box-sizing: border-box;
    background-color: #f9f9f9;
    position: relative;
    margin-bottom: 100px;
    h3 {
      text-align: center;
      font-size: 28px;
      font-weight: 700;
      color: #111;
      margin-bottom: 54px;
    }
    .loginFailed {
      color: #be29cc;
      font-size: 14px;
      text-align: center;
      font-weight: 700;
      margin-bottom: 50px;
    }
    .login-form {
      .login-id,
      .login-pw {
        display: flex;
        flex-wrap: wrap;
        color: #525252;
        border-radius: 4px;
        margin-bottom: 15px;
        font-size: 11px;
        font-weight: 800;
        line-height: 100%;
        padding: 0;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        label {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          transition: all 0.3s;
          &.on {
            display: none;
          }
        }
        span {
          position: absolute;
          left: 10px;
          top: 10px;
          transform: scale(0);
          transition: all 0.3s;
          &.on {
            transform: scale(1);
          }
        }
        input {
          border-radius: 4px;
          border: 2px solid transparent;
          background: rgba(126, 126, 126, 0.1);
          width: 100%;
          padding: 21.6px 6.7px 6.3px;
          font-size: 20px;
          &:focus {
            background: #fff;
            border-color: rgba(126, 126, 126, 0.1);
            + label {
              transform: scale(0);
            }
            ~ span {
              transform: scale(1);
            }
          }
          &.on {
            border: 2px solid #e8beed;
            background-color: #f3e4f5;
            outline-color: #be29cc;
            &:focus {
              background-color: #fff;
            }
          }
        }
      }
      .login-easy {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        button {
          outline: none;
          border: 2px solid rgba(0, 0, 0, 0.05);
          width: 78px;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
          padding: 1px 6px;
          border-radius: 4px;
          span {
            font-size: 24px;
          }
        }
        .login-facebook {
          background-color: #1877f2;
          span {
            color: #fff;
          }
        }
        .login-google {
          background-color: #fff;
          span {
          }
        }
        .login-apple {
          background-color: #000;
          span {
            color: #fff;
          }
        }
        .login-xbox {
          background-color: #107c10;
          span {
            color: #fff;
          }
        }
      }
      .keep-login {
        label {
          position: relative;
          font-size: 14px;
          font-weight: 600;
          margin-left: 30px;
          &::before {
            content: "";
            width: 18px;
            height: 18px;
            display: inline-block;
            border: 1px solid #000;
            position: absolute;
            left: -30px;
            top: 50%;
            background: rgba(126, 126, 126, 0.1);
            border-radius: 4px;
            border: none;
            transform: translateY(-50%);
          }
        }
        input[type="checkbox"] {
          position: absolute;
          left: -9999999px;
          top: 0;
          display: none;
          &:checked + label::before {
            content: "\\e928";
            font-family: xeicon !important;
            width: 18px;
            height: 18px;
            background: #ff4566;
            font-size: 18px;
            text-align: center;
            line-height: 18px;
            color: #fff;
          }
        }
      }
      button[type="submit"] {
        display: block;
        margin: 20px auto 30px;
        width: 81px;
        height: 81px;
        line-height: 81px;
        background-color: transparent;
        border: 2px solid #e8e8e8;
        box-sizing: border-box;
        border-radius: 26px;
        position: relative;
        cursor: pointer;
        &.on {
          border-color: #ff4566;
          background-color: #ff4566;
          cursor: pointer;
        }
        span {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: #e8e8e8;
          font-size: 36px;
          line-height: 0;
          box-sizing: border-box;
        }
      }
    }
    .help-text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      a {
        font-size: 12px;
        font-weight: 700;
        p {
        }
      }
    }
  }
  .login-footer {
    padding: 40px;
    p {
      font-weight: 800;
      font-size: 12px;
      color: rgba(249, 249, 249, 0.65);
    }
    ul {
      display: flex;
      li {
        &:last-child {
          padding: 2px 12px;
          box-sizing: border-box;
          background: rgba(249, 249, 249, 0.3);
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          vertical-align: middle;
          border-radius: 5px;
          margin-right: 0;
          &:hover {
            background: #ff4566;
          }
        }
        margin-right: 10px;
        color: rgba(249, 249, 249, 0.65);
        span {
          margin-left: 5px;
          vertical-align: middle;
          font-size: 18px;
        }
        a {
          font-size: 12px;
          font-weight: 800;
          color: rgba(249, 249, 249, 0.65);
        }
      }
    }
  }
`;
export const SignUpContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background: url("./images/loginAndSignup/signup_bg.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  padding: 27px 54px 108px 27px;
  letter-spacing: -1.5px;

  .signup-header {
    height: 100px;
    .inner {
      position: fixed;
      img {
        width: 165px;
      }
    }
  }
  .signup-section {
    display: flex;
    justify-content: flex-end;
    .signup-content {
      position: absolute;
      h3 {
        color: #fff;
        font-size: 69px;
        font-weight: 900;
        text-align: left;
        position: fixed;
        left: 100px;
        bottom: 150px;
      }
      .pagination-box {
        display: flex;
        position: absolute;
        right: 0;
        top: -40px;
        .pagination {
          display: block;
          width: 25px;
          height: 3px;
          opacity: 0.4;
          background: #f9f9f9;
          margin-left: 7px;
          &.current {
            opacity: 1;
            background-color: #d13639;
          }
        }
      }
      .signup-box {
        width: 460px;

        position: relative;
        background: #f9f9f9;
        padding: 81.318px 54.212px 54.212px 54.212px;
        color: #111;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;

        .signup-box-header {
          max-width: 100%;
          box-sizing: border-box;
          margin-bottom: 15px;
          h5 {
            color: #111;
            font-size: 28px;
            font-weight: 700;
            text-align: center;
          }
        }
        .signup-box-content {
          ul {
            li {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              margin-bottom: 15px;
              input[type="checkbox"] {
                position: absolute;
                left: -99999px;
                top: 0;
                display: none;
                &:checked + .checkbox-label::before {
                  background-color: #d13639;
                }
                &:checked + .checkbox-label::after {
                  content: "\\e929";
                  font-family: xeicon !important;
                  font-size: 18px;
                  color: #fff;
                  position: absolute;
                  left: -30px;
                  top: 50%;
                  transform: translateY(-50%);
                }
              }
              .checkbox-label {
                position: relative;
                margin-left: 30px;
                &::before {
                  content: "";
                  width: 20px;
                  height: 20px;
                  display: inline-block;
                  border-radius: 20%;
                  background: rgba(126, 126, 126, 0.15);
                  position: absolute;
                  left: -30px;
                  top: 50%;
                  transform: translateY(-50%);
                }
                &:hover::before {
                  background-color: rgba(126, 126, 126, 0.3);
                }
                .checkbox-text {
                  display: inline-block;
                  width: 286px;
                  font-size: 18px;
                  word-break: keep-all;
                  strong {
                    font-weight: 500;
                    color: #6b1c1d;
                  }
                }
                .link-wrapper {
                  padding: 5px;
                  position: absolute;
                  right: -50px;
                  top: 50%;
                  transform: translateY(-50%);
                  .consent-link {
                    background-color: transparent;
                    border: none;
                    svg {
                      vertical-align: text-top;
                      fill: currentColor;
                      width: 23.54px;
                      height: 23.54px;
                    }
                  }
                }
              }
            }
          }
        }
        button {
          display: block;
          margin: auto;
          width: 81px;
          height: 81px;
          line-height: 81px;
          background-color: transparent;
          border: 2px solid #e8e8e8;
          box-sizing: border-box;
          border-radius: 26px;
          position: relative;
          &.on {
            border-color: #ff4566;
            background-color: #ff4566;
            cursor: pointer;
          }
          span {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #e8e8e8;
            font-size: 36px;
            line-height: 0;
            box-sizing: border-box;
          }
        }
        .signup-form {
          .signup-id,
          .signup-pw,
          .signup-pw-confirm {
            display: flex;
            flex-wrap: wrap;
            color: #525252;
            border-radius: 4px;
            margin-bottom: 15px;
            font-size: 11px;
            font-weight: 800;
            line-height: 100%;
            padding: 0;
            position: relative;
            width: 100%;
            box-sizing: border-box;
            label {
              position: absolute;
              left: 16px;
              top: 50%;
              transform: translateY(-50%);
              transition: all 0.3s;
            }
            span {
              position: absolute;
              left: 10px;
              top: 10px;
              transform: scale(0);
              transition: all 0.3s;
            }
            input {
              border-radius: 4px;
              border: 2px solid transparent;
              background: rgba(126, 126, 126, 0.1);
              width: 100%;
              padding: 21.6px 6.7px 6.3px;
              font-size: 20px;
              &:focus {
                background: #fff;
                border-color: rgba(126, 126, 126, 0.1);
                + label {
                  transform: scale(0);
                }
                ~ span {
                  transform: scale(1);
                }
              }
            }
          }
          .signup-hint {
            font-size: 14px;
            color: #333;
            position: relative;
            margin-left: 17px;
            margin-bottom: 27px;
            line-height: 0.5;
            &:before {
              content: "i";
              width: 15px;
              height: 15px;
              display: inline-block;
              background-color: #39ccb1;
              border-radius: 50%;
              text-align: center;
              line-height: 15px;
              color: #fff;
              position: absolute;
              top: 50%;
              left: -17px;
              transform: translateY(-50%);
            }
          }
        }
        .signup-box-text {
          font-size: 18px;
          color: #7e7e7e;
          text-align: center;
          padding-bottom: 18px;
          box-sizing: border-box;
        }
        .user-id-info {
          max-width: 100%;
          text-align: center;
          padding: 60px 0 60px 0;
          box-sizing: border-box;
          p {
            font-size: 14px;
            color: #222325;
          }
          strong {
            font-size: 24px;
            color: #111;
          }
        }

        .last-btn {
          margin-bottom: 25px;
        }

        .signup-box-footer {
          font-size: 14px;
          color: #7e7e7e;
          text-align: center;
          a {
            color: #4285f4;
          }
        }
      }
    }
  }
  .signup-footer {
    position: fixed;
    left: 100px;
    bottom: 50px;
    font-size: 10.24px;
    font-weight: 800;
    ul {
      display: flex;
      li {
        margin-right: 25px;
        position: relative;
        &:after {
          content: "";
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(249, 249, 249, 0.3);
          position: absolute;
          right: -17px;
          top: 50%;
          transform: translateY(-50%);
        }
        &:last-child::after {
          display: none;
        }
        a {
          color: rgba(249, 249, 249, 0.65);
        }
      }
    }
    p {
      font-size: 12px;
      color: rgba(249, 249, 249, 0.3);
    }
  }
`;
export const VisualContainer = styled.section`
  width: 100%;
  height: 36vw;
  overflow-x: hidden;
  &::after {
    content: "";
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
    left: calc(50% - 615px);
    border-left: 1px solid hsla(38, 22%, 90%, 0.5);
    box-sizing: border-box;
  }
  .visual-video {
    position: absolute;
    overflow: hidden;
    top: 80px;
    width: 100%;
    max-height: 100%;
    height: 36vw;
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .section-wrapper {
    max-width: 1230px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    &::after {
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      border-right: 1px solid hsla(38, 22%, 90%, 0.5);
      right: 0;
      box-sizing: border-box;
    }
    &.border-left {
      &::before {
        content: "";
        display: block;
        height: 100%;
        pointer-events: none;
        position: absolute;
        top: 0;
        left: calc(25% + 7.5px);
        box-sizing: border-box;
        border-left: 1px solid hsla(38, 22%, 90%, 0.5);
      }
    }
    &.visual {
      align-items: center;
      display: flex;
      color: #ece8e1;
      padding: 40px 5%;
      flex-direction: column;
      height: 36vw;
      justify-content: center;
      box-sizing: border-box;
      .copy-container {
        margin: 35px 0;
        text-align: center;
        display: flex;
        flex-direction: column-reverse;
        width: 74%;
        position: relative;
        box-sizing: border-box;
        .visual-logo {
          margin: 0 auto;
          display: block;
          filter: drop-shadow(0 0 0.75em rgba(0, 0, 0, 0.3));
          position: relative;
          width: 85%;
          pointer-events: none;
          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
          }
        }
        p {
          margin: 0 0 35px;
          text-shadow: 0 0 0.75em rgba(0, 0, 0, 0.5);
          color: #ece8e1;
          line-height: 1.5;
        }
      }
    }
    .download-btn {
      margin: 42.5px 0 60px;
      color: #ece8e1;
      border: 0;
      cursor: pointer;
      padding: 7px;
      text-align: center;
      background: none;
      min-width: 260px;
      position: relative;
      width: auto;
      bottom: 27.5px;
      font-size: 14px;
      display: block;
      box-sizing: border-box;
      &::before {
        content: "";
        display: block;
        height: calc(50% - 4px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border: 1px solid hsla(38, 22%, 90%, 0.5);
        border-bottom: 0;
        box-sizing: border-box;
      }
      &::after {
        content: "";
        display: block;
        height: calc(50% - 4px);
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        border: 1px solid hsla(38, 22%, 90%, 0.5);
        border-top: 0;
        box-sizing: border-box;
      }
      .btn-style {
        font-weight: 700;
        overflow: hidden;
        position: relative;
        &::before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: calc(100% - 2px);
          background-color: #ff4655;
          box-sizing: border-box;
        }
        &::after {
          content: "";
          display: block;
          position: absolute;
          right: 0;
          top: 0;
          width: calc(100% - 2px);
          height: 2px;
          background-color: #ff4655;
          box-sizing: border-box;
        }
        .hover-mask {
          box-sizing: border-box;
          content: "";
          display: block;
          height: 100%;
          position: absolute;
          left: -5%;
          top: 0;
          width: 120%;
          z-index: 1;
          cursor: pointer;
          transition-duration: 0.3s, 0.3s;
          transition-timing-function: ease-out, ease-out;
          transition-delay: 0s, 0s;
          transition-property: transform, -webkit-transform;
          transform: translateX(-100%) skew(-10deg);
          background-color: #0f1923;
        }

        .btn-text {
          background-color: transparent;
          cursor: pointer;
          padding: 19px 30px;
          text-align: center;
          display: block;
          position: relative;
          z-index: 1;
          box-sizing: border-box;
          &::after {
            bottom: 0;
            content: "";
            display: block;
            position: absolute;
            height: 4px;
            width: 4px;
            transition: background-color 0.2s ease-in;
            background-color: #0f1923;
            right: 0;
            box-sizing: border-box;
          }
        }
        &:hover {
          .hover-mask {
            left: -5%;
            transform: translateX(0%) skew(-10deg);
            background-color: #0f1923;
          }
          .btn-text {
            &::after {
              background-color: #fff;
            }
          }
        }
      }
    }
    .polygon {
      color: #ff4655;
      font-size: 16px;
      height: 1em;
      position: absolute;
      left: 0;
      top: 70px;
      width: 1em;
      box-sizing: border-box;
      background-color: #ff4655;
      &::after {
        content: "";
        display: block;
        position: absolute;
        border-bottom: 0.5em solid transparent;
        border-top: 0.5em solid transparent;
        border-left: 0.5em solid;
        margin-left: 1em;
      }
    }
  }
`;
export const HomeGoodsContainer = styled.section`
  height: auto;
  width: 100%;
  background-color: #ece8e1;
  padding-bottom: 5vw;
  padding-top: 0;
  position: relative;
  &::before {
    content: "";
    display: block;
    font-size: 50px;
    position: absolute;
    z-index: 2;
    height: 0;
    top: -1em;
    left: 0;
    width: 50px;
    box-sizing: border-box;
    border-left: 0 solid transparent;
    border-right: 1em solid transparent;
    border-bottom: 1em solid #ece8e1;
  }
  .bg-for-stroke {
    bottom: 0;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    .bg-text {
      text-transform: uppercase;
      padding: 0;
      font-size: 326px;
      margin: 0;
      font-family: "BlackHanSans-Regular", sans-serif;

      line-height: 0.82;
      position: absolute;
      top: 0;
      white-space: nowrap;
      width: 100%;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      left: calc(50vw - 720px - 0.7px);
      line-height: 0.82;
      white-space: nowrap;
      span {
        display: block;
        -webkit-text-stroke-color: #dbd8d2;
        &:first-child {
          margin-left: 0;
        }
        &:nth-child(2) {
          margin-left: 0.9em;
        }
      }
    }
  }
  .detail-box {
    position: absolute;
    top: 60px;
    width: 55px;
    left: 50%;
    transform: translateX(-50%);
    &::before {
      content: "";
      display: block;
      height: 8px;
      position: absolute;
      width: 8px;
      background-color: #ff4655;
    }
    &::after {
      content: "";
      display: block;
      height: 8px;
      position: absolute;
      right: 0;
      width: 8px;
      background-color: #ff4655;
    }
  }
  .section-wrapper {
    height: auto;
    max-width: 1230px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    &.goods {
      padding: 0;
      .section-header {
        display: flex;
        justify-content: space-between;
        h2 {
          display: block;
          overflow: hidden;
          font-size: 120px;
          margin: 0;
          padding: 0.1em 0;
          line-height: 0.9;
          color: #ff4655;
          z-index: 1;
          font-family: "BlackHanSans-Regular", sans-serif;
          transform: translateY(23%);
          .home-goods-title {
            display: inline-block;
            width: 100%;
            transition-duration: 0.65s, 0.65s;
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94), cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition-delay: 0s, 0s;
            transform: translateY(115%);
          }
        }

        .goods-move-wrapper {
          color: #ff4655;
          cursor: pointer;
          margin: 0;
          align-items: center;
          display: flex;
          text-align: left;
          .goods-move-text {
            letter-spacing: -0.025em;
            line-height: 1.25;
            font-size: 14px;
            font-weight: 700;
            margin-right: 1em;
          }
          .move-icon {
            display: inline-block;
            height: 2.3rem;
            width: 2.3rem;
            svg {
              fill: currentColor;
              display: block;
              height: 100%;
              width: 100%;
              transition: 0.3s;
            }
          }
          &:hover {
            svg {
              transform: translateX(50%) rotate(0deg);
            }
          }
        }
      }
      .swiper-wrapper {
        display: flex;
        justify-content: space-between;
        .img-wrapper {
          height: auto;
          overflow: hidden;
          position: relative;
          width: 100%;
          background-image: url("");
          background-repeat: no-repeat;
          background-size: 100% 107%;
          background-position: 0 0;
          img {
            width: 300px;
            height: 300px;
          }
          &::before {
            bottom: 0;
            content: "";
            display: block;
            height: 100%;
            mix-blend-mode: multiply;
            position: absolute;
            top: 0;
            width: 100%;
            pointer-events: none;
            z-index: 1;
            box-sizing: border-box;
            transition-duration: 0.3s;
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1), cubic-bezier(0.215, 0.61, 0.355, 1);
            transition-delay: 0s;
          }
          &::after {
            content: "";
            display: block;
            width: 100%;
            box-sizing: border-box;
          }
          &:hover {
            .img-wrapper {
              &::before {
                transform: translateX(-120%) skewX(-10deg);
              }
            }
          }
        }
        .date-and-category-wrapper {
          margin: 20px 0 15px;
          color: #768079;
          font-size: 12px;
          line-height: 1.5;
          .goods-slider-date {
            color: #0f1923;
            font-weight: 600;
          }
          .goods-slider-category {
            color: #ff4655;
            position: relative;
            margin-left: 20px;
            font-size: 16px;
            font-weight: 600px;
            &::before {
              bottom: 3px;
              content: "";
              display: block;
              height: 1px;
              position: absolute;
              bottom: 3px;
              left: -10px;
              width: 1px;
              background-color: #000;
            }
          }
        }
        .goods-slider-title {
          line-height: 1.25;
          font-size: 21px;
          margin: 0;
          color: #383e3a;
          margin-bottom: 15px;
          font-weight: 600;
        }
      }
    }
  }
`;
export const HomeMediaContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 850px;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  .keyart-container {
    height: 100%;
    position: absolute;
    width: 100%;
    left: 0;
    img {
      width: 100%;
      height: 120%;
      object-fit: cover;
      box-sizing: border-box;
    }
  }
  .section-wrapper {
    max-width: 1230px;
    &.media {
      height: auto;
      position: relative;
      width: 100%;
      margin: 0 auto;
      padding: 40px 0;
      display: flex;
      flex-direction: column-reverse;
      .copy-content {
        position: relative;
        padding: 22px 0 40px;
        margin: 0 0;
        margin-left: 30px;
        h2 {
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          display: block;
          overflow: hidden;
          font-size: 140px;
          padding: 0.1em 0;
          color: #ece8e1;
          line-height: 0.9;
          margin: 0 0 40px;
          width: 80%;
          font-family: "BlackHanSans-Regular", sans-serif;
          padding-top: 50px;
          .home-media-title {
            transition-duration: 0.65s;
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition-delay: 0s;
            display: block;
            transform: translateY(115%);
          }
        }
        h5 {
          color: #ece8e1;
          margin: 0 0 250px;
          letter-spacing: 7px;
          position: absolute;
          top: 0;
          font-size: 21px;
        }
        a {
          .move-btn {
            margin: 42.5px 0 60px;
            color: #ece8e1;
            border: 0;
            cursor: pointer;
            padding: 7px;
            text-align: center;
            background: none;
            min-width: 280px;
            position: relative;
            width: auto;
            bottom: 27.5px;
            font-size: 14px;
            display: block;
            box-sizing: border-box;
            &::before {
              content: "";
              display: block;
              height: calc(50% - 4px);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              border: 1px solid hsla(38, 22%, 90%, 0.5);
              border-bottom: 0;
              box-sizing: border-box;
            }
            &::after {
              content: "";
              display: block;
              height: calc(50% - 4px);
              position: absolute;
              width: 100%;
              bottom: 0;
              left: 0;
              border: 1px solid hsla(38, 22%, 90%, 0.5);
              border-top: 0;
              box-sizing: border-box;
            }
            &:hover {
            }
            .btn-style {
              font-weight: 700;
              overflow: hidden;
              position: relative;
              &::before {
                content: "";
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: calc(100% - 2px);
                background-color: #ff4655;
                box-sizing: border-box;
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                right: 0;
                top: 0;
                width: calc(100% - 2px);
                height: 2px;
                background-color: #ff4655;
                box-sizing: border-box;
              }
              .hover-mask {
                box-sizing: border-box;
                content: "";
                display: block;
                height: 100%;
                position: absolute;
                left: -5%;
                top: 0;
                width: 120%;
                z-index: 1;
                cursor: pointer;
                transition-duration: 0.3s, 0.3s;
                transition-timing-function: ease-out, ease-out;
                transition-delay: 0s, 0s;
                transition-property: transform, -webkit-transform;
                transform: translateX(-100%) skew(-10deg);
                background-color: #0f1923;
              }
              .btn-text {
                background-color: transparent;
                cursor: pointer;
                padding: 19px 30px;
                text-align: center;
                display: block;
                position: relative;
                z-index: 1;
                box-sizing: border-box;
                &::after {
                  bottom: 0;
                  content: "";
                  display: block;
                  position: absolute;
                  height: 4px;
                  width: 4px;
                  transition: background-color 0.2s ease-in;
                  background-color: #0f1923;
                  right: 0;
                  box-sizing: border-box;
                }
              }
              &:hover {
                .hover-mask {
                  left: -5%;
                  transform: translateX(0%) skew(-10deg);
                  background-color: #0f1923;
                }
                .btn-text {
                  &::after {
                    background-color: #fff;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const HomeOverviewContainer = styled.section`
  background-color: #ece8e1;
  padding-top: 50px;
  &::after {
    content: "";
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
    border-left: 1px solid rgba(9, 9, 9, 0.4);
    left: calc(50% - 615px);
  }
  .section-wrapper {
    width: 100%;
    height: auto;
    max-width: 1230px;
    position: relative;
    &.overview {
      padding-top: 50px;
      margin: 0 auto;
      padding: 40px 0;
      padding-bottom: 80px;
      &::before {
        content: "";
        display: block;
        height: 0.3rem;
        max-width: 100px;
        position: absolute;
        top: -80px;
        width: 20%;
        background-color: #ff4655;
        left: 60%;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        max-width: calc(91.66667% - 2.5px);
        width: 100%;
        border-top: 1px solid rgba(15, 25, 35, 0.2);
        margin-left: calc(8.33333% + 2.5px);
      }
      .ov-top-detail {
        height: 30px;
        position: absolute;
        width: 100%;
        top: -80px;
        &::before {
          content: "";
          display: block;
          height: 10px;
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          background-color: #ff4655;
        }
        &::after {
          content: "";
          display: block;
          height: 14px;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 14px;
          background-color: #ff4655;
        }
      }
      .ov-detail-box {
        content: "";
        display: block;
        height: 14px;
        position: absolute;
        left: 80%;
        width: 14px;
        background-color: #ff4655;
      }
      .ov-title-container {
        position: relative;
        .horizontal {
          box-sizing: border-box;
          text-transform: uppercase;
          position: absolute;
          display: block;
          margin: 0;
          color: #ff4655;
          letter-spacing: 0.2em;
          border-bottom: none;
          padding: 0;
          bottom: 33px;
          font-size: 11px;
          transform: scaleX(-1);
          right: 0;
          &::after {
            content: "";
            display: block;
            min-width: 0px;
            position: absolute;
            top: calc(100% + 0.75rem);
            width: auto;
            border-bottom: 0.4rem solid #ff4655;
            transform-origin: left;
            transform: scaleX(1);
            transition-duration: 0.25s;
            transition-timing-function: ease-out;
            transition-delay: 0.1s;
          }
          &.on {
            &::after {
              min-width: 160px;
            }
          }
          .scamble-text {
            span {
              display: block;
              min-height: 11.5px;
              width: auto;
            }
          }
        }
        .ov-title {
          overflow: hidden;
          padding: 0.1em 0;
          color: #0f1923;
          line-height: 0.9;
          margin: 0 0 40px;
          padding-left: calc(8.33333% + 2.5px);
          width: 80%;
          padding-right: 130px;
          span {
            display: inline-block;
            width: 100%;
            transition-duration: 0.65s;
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition-delay: 0s;
            transform: translateY(102%);
            line-height: 0.9;
            font-size: 156px;
            font-family: "BlackHanSans-Regular", sans-serif;
          }
        }
      }
      .ov-content {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        margin-bottom: 15px;
        box-sizing: border-box;
        &::before {
          content: "";
          display: block;
          height: 7px;
          position: absolute;
          left: 0;
          top: 0;
          width: 7px;
          background-color: #ff4655;
        }
        .ov-copy-content {
          max-width: calc(25% - 22.5px);
          position: relative;
          width: 100%;
          margin-bottom: 80px;
          padding: 40px 0;
          margin-left: calc(16.66667% + 5px);
          &::before {
            content: "";
            display: block;
            height: 7px;
            position: absolute;
            top: 65%;
            width: 7px;
            background-color: #ff4655;
            left: calc(-33.33333% + -10px);
          }
          .ov-subtitle {
            font-size: 21px;
            letter-spacing: -0.01em;
            color: #383e3a;
            margin: 0 0 25px;
            line-height: 1.25;
            margin-block-start: 1.67em;
            margin-block-end: 1.67em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
          }
          .ov-description {
            font-size: 16px;
            line-height: 1.5;
            width: 102%;
            color: #768079;
            margin: 0;
            padding-right: 0;
            box-sizing: border-box;
            span {
            }
          }
          .ov-btn {
            color: #ece8e1;
            border: 0;
            cursor: pointer;
            padding: 7px;
            text-align: center;
            background: none;
            min-width: 288px;
            position: relative;
            width: auto;
            bottom: 0;
            font-size: 14px;
            display: block;
            border: 0;
            cursor: pointer;
            margin-top: 50px;
            left: 50%;
            transform: translateX(-50%);
            box-sizing: border-box;
            &::before {
              content: "";
              display: block;
              height: calc(50% - 4px);
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              border: 1px solid hsla(38, 22%, 90%, 0.5);
              border-bottom: 0;
              box-sizing: border-box;
              border-color: #bdbcb7;
            }
            &::after {
              content: "";
              display: block;
              height: calc(50% - 4px);
              position: absolute;
              width: 100%;
              bottom: 0;
              left: 0;
              border: 1px solid hsla(38, 22%, 90%, 0.5);
              border-top: 0;
              box-sizing: border-box;
              border-color: #bdbcb7;
            }
            &:hover {
            }
            .btn-style {
              font-weight: 700;
              overflow: hidden;
              position: relative;
              &::before {
                content: "";
                display: block;
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                height: calc(100% - 2px);
                background-color: #ff4655;
                box-sizing: border-box;
              }
              &::after {
                content: "";
                display: block;
                position: absolute;
                right: 0;
                top: 0;
                width: calc(100% - 2px);
                height: 2px;
                background-color: #ff4655;
                box-sizing: border-box;
              }
              .hover-mask {
                box-sizing: border-box;
                content: "";
                display: block;
                height: 100%;
                position: absolute;
                left: -5%;
                top: 0;
                width: 120%;
                z-index: 1;
                cursor: pointer;
                transition-duration: 0.3s, 0.3s;
                transition-timing-function: ease-out, ease-out;
                transition-delay: 0s, 0s;
                transition-property: transform, -webkit-transform;
                transform: translateX(-100%) skew(-10deg);
                background-color: #0f1923;
              }

              .btn-text {
                background-color: transparent;
                cursor: pointer;
                padding: 19px 30px;
                text-align: center;
                display: block;
                position: relative;
                z-index: 1;
                box-sizing: border-box;
                &::after {
                  bottom: 0;
                  content: "";
                  display: block;
                  position: absolute;
                  height: 4px;
                  width: 4px;
                  transition: background-color 0.2s ease-in;
                  background-color: #0f1923;
                  right: 0;
                  box-sizing: border-box;
                }
              }
              &:hover {
                .hover-mask {
                  left: -5%;
                  transform: translateX(0%) skew(-10deg);
                  background-color: #0f1923;
                }
                .btn-text {
                  &::after {
                    background-color: #fff;
                  }
                }
              }
            }
          }
        }
        .ov-media-container {
          position: relative;
          width: calc(50% - 15px);
          margin: 10px 0 0 calc(8.33333% + 32.5px - 1px);
          .ov-video-box {
            position: relative;
            width: 100%;
            margin: 20px 0;
            .ov-video-detil-box {
              position: absolute;
              top: -40px;
              width: 55px;
              left: 0;
              &::before {
                content: "";
                display: block;
                height: 8px;
                position: absolute;
                width: 8px;
                background-color: #ff4655;
              }
              &::after {
                content: "";
                display: block;
                height: 8px;
                position: absolute;
                width: 8px;
                background-color: #ff4655;
                right: 0;
              }
            }
            .ov-video-detail {
              color: #fff;
              display: inline;
              font-size: 15px;
              font-weight: 700;
              position: absolute;
              top: 20px;
              left: -20px;
              width: auto;
              z-index: 1;
              background-color: #ff4655;
              padding: 4px 20px;
            }
            .ov-video-container {
              position: relative;
              margin-right: -105.12px;
              &::before {
                content: "";
                display: block;
                padding-top: 56.25%;
              }
              .ov-play-btn {
                height: 100%;
                position: absolute;
                top: 0;
                width: 100%;
                cursor: pointer;
                background: none;
                border: none;
                padding: 0;
                text-align: left;
                &::before {
                  bottom: 0;
                  content: "";
                  display: block;
                  height: 100%;
                  opacity: 0.2;
                  position: absolute;
                  top: 0;
                  width: 100%;
                  z-index: 0;
                  background-color: #0f1923;
                  left: 0;
                  right: 0;
                }
                .ov-video {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  z-index: 0;
                  video {
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    box-sizing: border-box;
                    -webkit-user-drag: element;
                    user-select: none;
                    width: 100%;
                  }
                }
                .ov-icon-wrapper {
                  display: block;
                  height: 70px;
                  overflow: hidden;
                  width: 70px;
                  cursor: pointer;
                  background: none;
                  padding: 0;
                  text-align: left;
                  border: 1px solid #ece8e1;
                  pointer-events: none;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  background-color: rgba(255, 70, 85, 0.3);
                  transform: translate(-50%, -50%);
                  &::before {
                    content: "";
                    display: block;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    width: 120%;
                    background-color: #0f1923;
                    transition-duration: 0.2s;
                    transition-timing-function: ease-in-out;
                    transition-delay: 0s;
                    transform: translateX(-100%) skew(-10deg);
                    left: -10%;
                  }
                  &::after {
                    bottom: 0;
                    content: "";
                    display: block;
                    height: 0.4rem;
                    position: absolute;
                    width: 0.4rem;
                    background-color: #ece8e1;
                    right: 0;
                  }
                  .ov-icon {
                    transition-duration: 0.2s;
                    transition-timing-function: ease-in-out;
                    transition-delay: 0s;
                    transform: scale(1);
                    backface-visibility: hidden;
                    color: #ece8e1;
                    height: 100%;
                    position: relative;
                    width: 100%;
                    display: inline-block;
                    pointer-events: none;
                    svg {
                      fill: currentColor;
                      display: block;
                      height: 100%;
                      width: 100%;
                      overflow: hidden;
                    }
                  }
                }
              }
            }
            .video-border-bottom {
              width: 105px;
              height: 5px;
              background-color: #ff4655;
            }
          }
        }
        .detail {
          &::before {
            bottom: -2.2px;
            color: #dbd9d2;
            content: "00.";
            display: block;
            font-size: 50px;
            position: absolute;
            border-top: 5px solid;
            left: calc(8.33333% + 2.5px);
            font-family: "BlackHanSans-Regular", sans-serif;
          }
          &::after {
            bottom: 0;
            content: "";
            display: block;
            height: 11px;
            position: absolute;
            width: 11px;
            background-color: #ff4655;
            left: 0;
          }
        }
      }
    }
  }
`;
export const HomeAgentsContainer = styled.section`
  height: 787.3px;
  overflow-x: hidden;
  overflow: visible;
  position: relative;
  width: 100%;
  background-color: #ff4655;
  &::after {
    content: "";
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
    left: calc(50% - 615px);
    border-left: 1px solid hsla(38, 22%, 90%, 0.5);
  }
  .background-container {
    bottom: 0;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    left: 0;
    right: 0;
    .background-side {
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      padding-top: 50px;
      &::before {
        height: 540px;
        width: 32px;
        content: "";
        display: block;
        position: absolute;
        top: 90px;
        left: calc(50vw - 682px);
        margin-left: 0;
        background-image: url("/images/main/background-sprite.png");
        background-repeat: no-repeat;
        background-position: -1px -1px;
      }
      &::after {
        height: 520px;
        width: 30px;
        content: "";
        display: block;
        position: absolute;
        top: 15%;
        background-position: -123px -1px;
        background-image: url("/images/main/background-sprite.png");
        background-repeat: no-repeat;
        right: 1.75vw;
      }
    }
    .background-center {
      background: url("/images/main/bg-center.png");
      position: absolute;
      bottom: 0;
      height: calc(100% - 120px);
      width: calc(100% - 100vw + 1230px);
      left: calc(50vw - 615px);
      &::before {
        content: "";
        display: block;
        height: 20px;
        position: absolute;
        top: -20px;
        width: 100%;
        background-image: url("/images/main/bg-center-before.png");
      }
    }
  }
  .section-wrapper {
    margin: 0 auto;
    padding: 40px 0;
    height: auto;
    max-width: 1230px;
    position: relative;
    width: 100%;

    &.agents {
      padding-bottom: 0;
      padding-top: 0;
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
      &::before {
        bottom: 100%;
        content: "";
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        border-bottom: 55px solid #ff4655;
        border-right: 7.3vw solid transparent;
        right: 100%;
        border-right-width: calc(50vw - 615px);
      }
      .copy-content {
        position: relative;
        max-width: calc(41.66667% - 17.5px);
        width: 100%;
        z-index: 1;
        padding: 22px 0 40px;
        margin: 100px 0;
        margin-left: 30px;
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          width: 100%;
          border-top: 1px solid hsla(38, 22%, 90%, 0.4);
        }
        .side-up-title {
          display: block;
          overflow: hidden;
          font-size: 140px;
          padding: 0.1em 0;
          color: #ece8e1;
          line-height: 0.9;
          margin: 0 0 40px;
          padding-top: 0.13em;
          width: 80%;
          .ag-title {
            width: 100%;
            display: block;
            transition-duration: 0.65s;
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition-delay: 0s;
            transform: translateY(120%);
            font-family: "BlackHanSans-Regular", sans-serif;
          }
        }
        .ag-subtitle {
          margin: 0 0 25px;
          color: #ece8e1;
          letter-spacing: -0.01em;
          font-size: 21px;
          line-height: 1.25;
        }
        .ag-description {
          font-size: 16px;
          line-height: 1.5;
          max-width: calc(80% - 6px);
          width: 100%;
          color: #ece8e1;
          span {
          }
        }
        .ag-btn {
          margin: 42.5px 0 60px;
          color: #ece8e1;
          border: 0;
          cursor: pointer;
          padding: 7px;
          text-align: center;
          background: none;
          min-width: 288px;
          position: relative;
          width: auto;
          font-size: 14px;
          display: block;
          box-sizing: border-box;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 50px;
          &::before {
            content: "";
            display: block;
            height: calc(50% - 4px);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            border: 1px solid hsla(38, 22%, 90%, 0.5);
            border-bottom: 0;
            box-sizing: border-box;
          }
          &::after {
            content: "";
            display: block;
            height: calc(50% - 4px);
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            border: 1px solid hsla(38, 22%, 90%, 0.5);
            border-top: 0;
            box-sizing: border-box;
          }
          .btn-style {
            font-weight: 700;
            overflow: hidden;
            position: relative;
            color: #0f1923;
            &::before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: calc(100% - 2px);
              background-color: #ece8e1;
              box-sizing: border-box;
            }
            &::after {
              content: "";
              display: block;
              position: absolute;
              right: 0;
              top: 0;
              width: calc(100% - 2px);
              height: 2px;
              background-color: #ece8e1;
              box-sizing: border-box;
            }
            .hover-mask {
              box-sizing: border-box;
              content: "";
              display: block;
              height: 100%;
              position: absolute;
              left: -5%;
              top: 0;
              width: 120%;
              z-index: 1;
              cursor: pointer;
              transition-duration: 0.3s, 0.3s;
              transition-timing-function: ease-out, ease-out;
              transition-delay: 0s, 0s;
              transition-property: transform, -webkit-transform;
              transform: translateX(-100%) skew(-10deg);
              background-color: #0f1923;
            }

            .btn-text {
              background-color: transparent;
              cursor: pointer;
              padding: 19px 30px;
              text-align: center;
              display: block;
              position: relative;
              z-index: 1;
              box-sizing: border-box;
              &::after {
                bottom: 0;
                content: "";
                display: block;
                position: absolute;
                height: 4px;
                width: 4px;
                transition: background-color 0.2s ease-in;
                background-color: #0f1923;
                right: 0;
                box-sizing: border-box;
              }
            }
            &:hover {
              .hover-mask {
                left: -5%;
                transform: translateX(0%) skew(-10deg);
                background-color: #0f1923;
              }
              .btn-text {
                color: #ece8e1;
                &::after {
                  background-color: #fff;
                }
              }
            }
          }
        }
      }
      .animate-agents {
        pointer-events: none;
        z-index: 1;
        max-width: calc(58.33333% - 12.5px);
        position: relative;
        width: 100%;
        margin: 4rem auto 0;
        &::before {
          content: "";
          display: block;
          padding-top: 106%;
        }
        .add-background {
          position: absolute;
          height: 140%;
          top: -32%;
          width: 122%;
          text-align: center;
          left: auto;
          right: -9%;
          transform: translateY(0%);
          background-image: url("/images/main/raze-reyna.png");
        }
      }
    }
  }
`;
export const HomeMapsContainer = styled.section`
  height: auto;
  position: relative;
  width: 100%;
  overflow: visible;
  display: block;
  background-color: #ece8e1;
  .bg-text-stroke {
    bottom: 0;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    display: block;
    .text-stroke {
      font-family: "BlackHanSans-Regular", sans-serif;

      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      line-height: 0.82;
      position: absolute;
      top: 0;
      white-space: nowrap;
      width: 100%;
      font-size: 326px;
      margin: 0;
      -webkit-text-stroke-color: #dbd8d2;
      padding: 0;
      left: calc(50vw - 720px - 0.07em);
      margin-top: 0.3em;
      text-transform: uppercase;
      span {
        margin-left: 0;
      }
    }
  }
  .bg-side {
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: calc(100% - 100px);
    top: 80px;
    left: calc(50vw - 682px);
    &::before {
      content: "";
      position: absolute;
      height: 240px;
      width: 30px;
      display: block;
      top: 0;
      background-position: -35px -103px;
      background-image: url("images/main/background-sprite-maps.png");
      background-repeat: no-repeat;
    }
    &::after {
      content: "";
      height: 100px;
      width: 52px;
      position: absolute;
      bottom: 100px;
      display: block;
      background-position: -35px -1px;
      background-repeat: no-repeat;
      background-image: url("images/main/background-sprite-maps.png");
    }
  }
  .image-container {
    position: absolute;
    height: 62vw;
    max-height: 880px;
    width: 100%;
    bottom: 0;
    transform: none;
    background: none;
    right: 0;
    .img-wrapper {
      height: 100%;
      position: absolute;
      width: 100%;
      .bird {
        overflow-clip-margin: content-box;
        overflow: clip;
        box-sizing: border-box;
        display: block;
        position: absolute;
        bottom: 45%;
        height: 30%;
        width: auto;
        right: calc(50vw - 615px);
        transform: translateX(-88%);
      }

      .maps {
        overflow-clip-margin: content-box;
        overflow: clip;
        box-sizing: border-box;
        display: block;
        width: auto;

        position: absolute;
        bottom: 0;
        height: 100%;
        transform: translateX(22%);
        right: calc(50vw - 615px);
      }
    }
  }
  .section-wrapper {
    height: auto;
    max-width: 1230px;
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
    &.maps {
      padding-top: 40px;
      .copy-content {
        position: relative;
        max-width: calc(41.66667% - 17.5px);
        width: 100%;
        padding: 22px 0 40px;
        margin: 100px 0;
        margin-left: calc(8.33333% + 2.5px);
        &::after {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          width: 100%;
          border-top: 1px solid rgba(15, 25, 35, 0.4);
        }
        .slideup-title {
          margin-block-start: 0.83em;
          margin-block-end: 0.83em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          box-sizing: border-box;
          display: block;
          overflow: hidden;
          font-size: 140px;
          padding: 0.1em 0;
          color: #0f1923;
          line-height: 0.9;
          margin: 0 0 40px;
          padding-top: 0.13em;
          width: 80%;
          font-family: "BlackHanSans-Regular", sans-serif;

          .home-maps-title {
            transition-duration: 0.65s;
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
            transition-delay: 0s;
            display: block;
            width: 100%;
            transform: translateY(120%);
          }
        }
        .subtitle {
          margin-block-start: 1.67em;
          margin-block-end: 1.67em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          line-height: 1.25;
          font-size: 21px;
          letter-spacing: -0.01em;
          color: #383e3a;
          margin: 0 0 25px;
        }
        .description {
          font-size: 16px;
          line-height: 1.5;
          max-width: calc(80% - 6px);
          margin: 0;
          width: 100%;
          color: #768079;
          span {
            color: #768079;
          }
        }
        .maps-btn {
          color: #ece8e1;
          border: 0;
          cursor: pointer;
          padding: 7px;
          text-align: center;
          background: none;
          min-width: 288px;
          position: relative;
          width: auto;
          bottom: 0;
          font-size: 14px;
          display: block;
          border: 0;
          cursor: pointer;
          left: 0;
          margin-top: 50px;
          box-sizing: border-box;
          &::before {
            content: "";
            display: block;
            height: calc(50% - 4px);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            border: 1px solid hsla(38, 22%, 90%, 0.5);
            border-bottom: 0;
            box-sizing: border-box;
            border-color: #bdbcb7;
          }
          &::after {
            content: "";
            display: block;
            height: calc(50% - 4px);
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            border: 1px solid hsla(38, 22%, 90%, 0.5);
            border-top: 0;
            box-sizing: border-box;
            border-color: #bdbcb7;
          }
          &:hover {
          }
          .btn-style {
            font-weight: 700;
            overflow: hidden;
            position: relative;
            &::before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: calc(100% - 2px);
              background-color: #ff4655;
              box-sizing: border-box;
            }
            &::after {
              content: "";
              display: block;
              position: absolute;
              right: 0;
              top: 0;
              width: calc(100% - 2px);
              height: 2px;
              background-color: #ff4655;
              box-sizing: border-box;
            }
            .hover-mask {
              box-sizing: border-box;
              content: "";
              display: block;
              height: 100%;
              position: absolute;
              left: -5%;
              top: 0;
              width: 120%;
              z-index: 1;
              cursor: pointer;
              transition-duration: 0.3s, 0.3s;
              transition-timing-function: ease-out, ease-out;
              transition-delay: 0s, 0s;
              transition-property: transform, -webkit-transform;
              transform: translateX(-100%) skew(-10deg);
              background-color: #0f1923;
            }

            .btn-text {
              background-color: transparent;
              cursor: pointer;
              padding: 19px 30px;
              text-align: center;
              display: block;
              position: relative;
              z-index: 1;
              box-sizing: border-box;
              &::after {
                bottom: 0;
                content: "";
                display: block;
                position: absolute;
                height: 4px;
                width: 4px;
                transition: background-color 0.2s ease-in;
                background-color: #0f1923;
                right: 0;
                box-sizing: border-box;
              }
            }
            &:hover {
              .hover-mask {
                left: -5%;
                transform: translateX(0%) skew(-10deg);
                background-color: #0f1923;
              }
              .btn-text {
                &::after {
                  background-color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const CommuVisualContainer = styled.section`
  width: 100%;
  background-color: #0f1923;
  height: 515px;
  position: relative;
  .background-text {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 250px;
    transform: translateY(-50%);
    border-top: 0.5px solid #fff;
    h3 {
      line-height: 1.2;
      font-family: "BlackHanSans-Regular", sans-serif;
      font-size: 150px;
      color: #fff;
    }
  }
  .background-valorant-text {
    margin-left: 20px;
    overflow: hidden;
    svg {
      stroke: aquamarine;
      color: #0f1923;
    }
  }
  .background-character {
    img {
      width: 540px;
      position: absolute;
      right: 250px;
      bottom: 0;
      z-index: 1;
    }
  }
`;
export const CommunityBoxContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: #ece8e1;
  .inner {
    display: flex;
    flex-wrap: nowrap;
    width: 1352px;
    align-items: flex-start;
    .sidebar-wrap,
    .sidebar-right-wrap,
    .commu-contents-wrap,
    .contents-item-detail,
    #write-form {
      margin: -40px auto 100px auto;
      margin-right: 20px;
      position: relative;
      z-index: 100;
      box-shadow: 1px 1px 10px #dde0e3;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
export const CommuContentsContainer = styled.div`
  width: 728px;
  background-color: #fff;
  position: relative;
  .for-space {
    width: 100%;
    height: 10px;
    background-color: #ece8e1;
  }
`;
export const CommuWritingContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ece8e1;
  .inner {
    display: flex;
    flex-wrap: nowrap;
    width: 1352px;
    align-items: flex-start;
    .sidebar-wrap,
    .sidebar-right-wrap,
    .commu-contents-wrap,
    .contents-item-detail-wrap,
    #write-form {
      margin: -40px auto 100px auto;
      margin-right: 20px;
      position: relative;
      z-index: 100;
      box-shadow: 1px 1px 10px #dde0e3;
      background-color: #fff;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  #write-form {
    width: 728px;
    background-color: #fff;
    position: relative;
    padding: 20px;
    box-sizing: border-box;
    .select-category {
      margin-top: 30px;
      select {
        position: relative;
        border: 1px solid #dddfe4;
        border-radius: 4px;
        padding: 10px 38px 9px 15px;
        line-height: 19px;
        font-size: 16px;
        color: #1e2022;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url(/images/community/icon-dropdown-down@2x.png);
        background-size: 24px;
        background-position: top 8px right 8px;
        background-repeat: no-repeat;
        option {
          font-weight: normal;
          display: block;
          white-space-collapse: collapse;
          text-wrap: nowrap;
          min-height: 1.2em;
          padding: 0px 2px 1px;
        }
      }
    }
    .write-title-input {
      margin-top: 8px;
      input {
        display: block;
        width: 100%;
        background-color: #fff;
        border: 1px solid #dddfe4;
        padding: 10px 16px 9px;
        line-height: 19px;
        font-size: 16px;
        color: #1e2022;
        box-sizing: border-box;
      }
    }
    .post-link {
      margin-top: 8px;
      position: relative;
      &::before {
        position: absolute;
        content: "";
        background: url(/images/community/icon-url@2x.png?bc300c8…);
        background-size: 24px;
        width: 24px;
        height: 24px;
        z-index: 1;
        top: 8px;
        left: 16px;
      }
      input {
        display: block;
        width: 100%;
        background-color: #fff;
        border: 1px solid #dddfe4;
        padding: 10px 16px 9px;
        line-height: 19px;
        font-size: 16px;
        color: #1e2022;
        box-sizing: border-box;
        padding-left: 48px;
        background: #f8f9fa;
      }
      + div {
        margin-top: 8px;
        border: 1px solid #dddfe4;
        .ql-toolbar {
          &.ql-snow {
            border: 1px solid transparent;
            border-bottom: 1px solid #ccc;
          }
        }
        .ql-container {
          &.ql-snow {
            border: none;
            height: 360px;
            box-sizing: border-box;
          }
        }
      }
    }
    .write-buttons {
      background-color: #f8f9fa;
      border: none;
      display: flex;
      justify-content: space-between;
      padding: 0px 25px 20px 25px;
      box-sizing: border-box;
      button {
        outline: none;
        background-color: transparent;
        border: none;
        cursor: pointer;
        &[type="button"] {
          margin-top: 16px;

          line-height: 19px;
          font-size: 16px;
          color: #7b858e;
          border-radius: 4px;
          background-color: #fff;
          border: 1px solid #dddfe4;
          width: 154px;
          height: 48px;
        }
        &[type="submit"] {
          margin-top: 16px;

          float: right;
          position: static;
          color: #fff;
          border-radius: 4px;
          background-color: #46cfa7;
          width: 154px;
          height: 48px;
          line-height: 19px;
          font-size: 16px;
        }
      }
    }
  }
`;
export const ContentsListContainer = styled.section`
  background: #fff;
  margin-top: 8px;
  line-height: 18px;
  font-size: 14px;
  color: #7b858e;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  border-top: 1px solid #ebeef1;
`;
export const ContentsItemContainer = styled.article`
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  min-height: 78px;
  box-sizing: border-box;
  border-top: 1px solid #ebeef1;
  background-color: #fff;
  padding: 8px 0;
  &:first-child {
    border-top: none;
  }
  .vote {
    display: table-cell;
    width: 72px;
    vertical-align: middle;
    text-align: center;
    img {
    }
    div {
    }
  }
  .content {
    display: table-cell;
    vertical-align: middle;
    a {
      .title {
        display: flex;
        vertical-align: top;
        line-height: 15px;
        height: 15px;
        font-size: 14px;
        color: #1e2022;
        word-break: break-all;
        .post-title {
          display: block;
          max-width: 80%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding-right: 5px;
        }
      }
    }
    .meta {
      margin-top: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .meta-item {
        display: inline-block;
        line-height: 18px;
        font-size: 14px;
        color: #98a0a7;
        padding-left: 8px;
        &:first-child {
          padding-left: 0;
        }
        &:nth-child(2)::before {
          display: inline-block;
          vertical-align: middle;
          border-left: 1px solid #ebeef1;
          height: 12px;
          content: "";
          margin-right: 8px;
        }
      }
    }
  }
  .thumbnail {
    display: table-cell;
    width: 93px;
    padding: 0 8px 0 4px;
    vertical-align: middle;
    a {
      img {
        display: block;
        width: 62px;
        height: 62px;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }
  }
`;
export const ContentHeaderContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  .commu-header-info {
    padding-top: 18px;
    padding-bottom: 17px;
    h2 {
      padding-left: 16px;
      line-height: 21px;
      font-size: 18px;
      color: #1e2022;
      font-weight: 700;
      a {
      }
    }
    .writing {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 16px;
      margin-right: 16px;
      background-color: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      img {
        width: 24px;
        height: 24px;
        filter: invert(41%) sepia(70%) saturate(2108%) hue-rotate(322deg) brightness(97%) contrast(109%);
      }
    }
  }
  .sub-menu {
    max-height: 48px;
    .sub-menu-list {
      padding: 0 16px;
      white-space: nowrap;
      .sub-menu-item {
        display: inline-block;
        margin-left: 8px;
        line-height: 17px;
        font-size: 14px;
        color: #7b858e;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        img {
          width: 24px;
          height: 24px;
          margin-right: 4px;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
    }
  }
  .sub-header-search {
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    margin-right: 15px;
    label {
      .sub-header-search-select {
        float: left;
        width: 108px;
        padding: 9px 0 8px 15px;
        box-sizing: border-box;
        border: 1px solid #ebeef1;
        background: #fff;
        border-radius: 4px 0 0 4px;
        line-height: 17px;
        font-size: 14px;
        color: #98a0a7;

        outline: none;
      }
    }
    .sub-header-search-input {
      float: left;
      border: none;
      width: 200px;
      box-sizing: border-box;
      padding: 10px 32px 9px 16px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: #ebeef1;
      line-height: 17px;
      font-size: 14px;
      outline: none;
      &:focus {
        &::placeholder {
          visibility: hidden;
        }
      }
    }
    .sub-header-search-button {
      background: none;
      font-family: inherit;
      border: 0;
      padding: 0;
      border-radius: 0;
      float: left;
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 6px;
      margin-right: 8px;
      img {
      }
    }
  }
  .dd {
    background: #f8f9fa;
    margin-top: 8px;
    line-height: 18px;
    font-size: 14px;
    color: #7b858e;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
  }
`;
export const ContentsItemDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ece8e1;
  .for-space {
    width: 100%;
    height: 10px;
    background-color: #ece8e1;
  }
  .inner {
    display: flex;
    flex-wrap: nowrap;
    width: 1352px;
    align-items: flex-start;
    .sidebar-wrap,
    .sidebar-right-wrap,
    .commu-contents-wrap,
    .contents-item-detail-wrap,
    #write-form {
      margin: -40px auto 100px auto;
      margin-right: 20px;
      position: relative;
      z-index: 100;
      box-shadow: 1px 1px 10px #dde0e3;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .contents-item-detail-wrap {
    width: 728px;
    background-color: #fff;
    position: relative;
    .commu-detail-header {
      padding: 24px 16px;
      border-bottom: 1px solid #ebeef1;
      .commu-detail-title {
        line-height: 36px;
        font-size: 24px;
        color: #1e2022;
        word-wrap: break-word;
        word-break: break-all;
        overflow: auto;
      }
      .commu-detail-meta {
        margin-top: 9px;
        line-height: 17px;
        font-size: 14px;
        color: #7b858e;
        display: flex;
        justify-content: space-between;
        .meta-list-left {
          .meta-item {
            display: inline-block;
            line-height: 18px;
            font-size: 14px;
            color: #98a0a7;
            padding-left: 8px;
            &:first-child {
              padding-left: 0;
            }
          }
        }
        .meta-list-right {
          float: right;
          margin-top: 0;
          .meta-item {
            display: inline-block;
            vertical-align: middle;
            position: relative;
            margin-left: 8px;
            padding-left: 9px;
            span {
            }
          }
        }
      }
    }
    .commu-detail-contents-wrap {
      .for-space {
        margin-bottom: 24px;
        font-size: 12px;
        color: #758592;
      }
      .commu-detail-content {
        width: 100%;
        box-sizing: border-box;
        padding: 24px;
        line-height: 24px;
        font-size: 16px;
        color: #1e2022;
        word-wrap: break-word;
        word-break: break-word;

        p {
        }
      }
    }
    .vote-box {
      padding: 12px 0;
      border-top: 1px solid #ebeef1;
      border-bottom: 1px solid #ebeef1;
      text-align: center;
      button[type="submit"] {
        padding: 12px;
        min-width: 88px;
        line-height: 17px;
        font-size: 14px;
        height: 43px;
        color: #1e2022;
        margin-left: 8px;
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #dddfe4;
        cursor: pointer;
        .vote-up {
          width: 16px;
          height: 16px;
          background-image: url("/images/community/icon-vote-up@2x.png");
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 16px;
          line-height: 999px;
          vertical-align: top;
          overflow: hidden;
          display: inline-block;
          margin-top: 1px;
          transition: all 0.5s;
        }
        .vote-up-count {
          display: inline-block;
          transition: all 0.3s;
          vertical-align: middle;
        }
      }
      button[type="button"] {
        padding: 12px;
        min-width: 88px;
        line-height: 17px;
        font-size: 14px;
        height: 43px;
        color: #1e2022;
        margin-left: 8px;
        border-radius: 4px;
        background-color: #fff;
        border: 1px solid #dddfe4;
        cursor: pointer;
        .vote-down {
          width: 16px;
          height: 16px;
          background-image: url("/images/community/icon-vote-down@2x.png");
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: 16px;
          line-height: 999px;
          vertical-align: top;
          overflow: hidden;
          display: inline-block;
          margin-top: 1px;
          transition: all 0.5s;
        }
        .vote-down-count {
          display: inline-block;
          transition: all 0.3s;
          vertical-align: middle;
        }
      }
    }
    .commu-detail-footer {
      background: #f8f9fa;
      padding: 16px;
      text-align: right;
      ul {
        li {
          display: inline-block;
          margin-left: 8px;
          button {
            background: none;
            line-height: 17px;
            font-size: 14px;
            color: #7b858e;
            border: none;
            cursor: pointer;
            img {
              width: 16px;
              margin-right: 8px;
            }
            span {
            }
          }
        }
      }
    }
    .comment-wrap {
      .comment-header {
        position: relative;
        padding: 16px;
        display: flex;
        justify-content: space-between;
        h2 {
          display: inline;
          line-height: 21px;
          font-size: 18px;
          color: #1e2022;
          margin-right: 8px;
        }
        .comment-count {
          line-height: 18px;
          font-size: 14px;
          color: #7b858e;
          em {
            color: #ff4566;
          }
        }
      }
      .comment-write {
        padding: 24px 16px;
        box-sizing: border-box;
        background: #f8f9fa;
        .comment-write-inner {
          background-color: #fff;
          border: 1px solid #dddfe4;
          .comment-write-content {
            margin: 8px 16px 0;
            padding-bottom: 16px;
          }
          textarea {
            display: block;
            width: 100%;
            min-height: 40px;
            line-height: 20px;
            font-size: 14px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            resize: none;
            border: none;
            outline: none;
            overflow: hidden;
            overflow-wrap: break-word;
            height: 44px;
            font-family: "Noto Sans KR", sans-serif;
          }
          .comment-write-footer {
            position: relative;
            border-top: 1px solid #dddfe4;
            min-height: 42px;
            box-sizing: border-box;
            padding-right: 186px;
            .comment-write-addition {
              position: relative;
              vertical-align: top;
              white-space: nowrap;
              .comment-write-addition-upload {
                position: relative;
                display: inline-block;
                input {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  top: 0;
                  opacity: 0;
                  cursor: pointer;
                  z-index: 10;
                }
                button {
                  background: none;
                  padding: 11px 0 12px;
                  line-height: 17px;
                  font-size: 14px;
                  color: #7b858e;
                  margin-left: 16px;
                  border: none;
                  cursor: pointer;
                  img {
                    width: 16px;
                    margin-right: 4px;
                    vertical-align: middle;
                  }
                  span {
                    vertical-align: middle;
                  }
                }
              }
            }
            .comment-write-length {
              font-size: 14px;
              line-height: 17px;
              color: #7b858e;
              position: absolute;
              right: 100px;
              bottom: 12px;
            }
            .comment-write-submit {
              position: absolute;
              right: 0;
              bottom: 0;
              .comment-submit {
                cursor: pointer;
                width: 92px;
                padding: 10px 9px;
                line-height: 20px;
                font-size: 16px;
                border-radius: 0;
                border-color: #46cfa7;
                background-color: #46cfa7;
                color: #fff;
                border: none;
                &:hover {
                  background-color: #16ae81;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const CommentListContainer = styled.div`
  .sort-list {
    border-bottom: 1px solid #dddfe4;
    padding: 0 16px;
    display: flex;
    li {
      button {
        padding: 15px 16px 11px;
        line-height: 19px;
        font-size: 16px;
        color: #1e2022;
        border-bottom: 3px solid transparent;
        background: none;
        cursor: pointer;
        border: none;
      }
    }
  }
`;
export const CommentItemContainer = styled.li`
  position: relative;
  border-top: 1px solid #dddfe4;
  &:first-child {
    border-top: none;
  }
  .comment-li {
    position: relative;
    padding: 12px 12px 12px 64px;
    .comment-vote {
      position: absolute;
      left: 0;
      top: 12px;
      width: 64px;
      text-align: center;
      button {
        cursor: pointer;
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 16px;
        line-height: 999px;
        vertical-align: top;
        overflow: hidden;
        margin-top: 4px;
        background-color: transparent;
        border: none;
      }
      .comment-vote-up-button {
        background-image: url("/images/community/icon-vote-up@2x.png");
      }
      .comment-vote-down-button {
        background-image: url("/images/community/icon-vote-down@2x.png");
      }
    }
    .comment-meta {
      line-height: 17px;
      font-size: 14px;
      color: #7b858e;
      .comment-name {
        font-weight: 700;
        color: #1e2022;
        word-wrap: break-word;
        word-break: break-all;
        margin-right: 5px;
      }
      .comment-date {
        &::before {
          display: inline-block;
          content: "";
          height: 12px;
          border-left: 1px solid #ebeef1;
          margin-left: 4px;
          padding-left: 8px;
        }
      }
    }
    .comment-text {
      margin-top: 8px;
      line-height: 20px;
      font-size: 14px;
      color: #1e2022;
      word-wrap: break-word;
      word-break: break-all;
      overflow: auto;
      max-height: 400px;
      p {
      }
    }
    .comment-buttons {
      margin-top: 8px;
      ul {
        display: flex;
        li {
          .comment-button {
            line-height: 17px;
            font-size: 14px;
            color: #7b858e;
            background: none;
            border: none;
            cursor: pointer;
            &:first-child {
              padding-left: 0px;
              padding-right: 15px;
            }
            img {
              margin-right: 5px;
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
`;
export const ReplyListContainer = styled.div`
  background: #f8f9fa;
  padding-left: 92px;
  box-sizing: border-box;
  .reply-write {
    position: relative;
    box-sizing: border-box;
    &::before {
      position: absolute;
      top: 12px;
      left: -30px;
      content: "";
      width: 12px;
      height: 12px;
      border-left: 1px solid #c5cbd0;
      border-bottom: 1px solid #c5cbd0;
    }
    padding: 24px 16px 24px 0px;
    box-sizing: border-box;
    background: #f8f9fa;
    .reply-write-inner {
      background-color: #fff;
      border: 1px solid #dddfe4;
      .reply-write-content {
        margin: 8px 16px 0;
        padding-bottom: 16px;
      }
      textarea {
        display: block;
        width: 100%;
        min-height: 40px;
        line-height: 20px;
        font-size: 14px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        resize: none;
        border: none;
        outline: none;
        overflow: hidden;
        overflow-wrap: break-word;
        height: 44px;
        font-family: "Noto Sans KR", sans-serif;
      }
      .reply-write-footer {
        position: relative;
        border-top: 1px solid #dddfe4;
        min-height: 42px;
        box-sizing: border-box;
        padding-right: 186px;
        .reply-write-addition {
          position: relative;
          vertical-align: top;
          white-space: nowrap;
          .reply-write-addition-upload {
            position: relative;
            display: inline-block;
            input {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              opacity: 0;
              cursor: pointer;
              z-index: 10;
            }
            button {
              background: none;
              padding: 11px 0 12px;
              line-height: 17px;
              font-size: 14px;
              color: #7b858e;
              margin-left: 16px;
              border: none;
              cursor: pointer;
              img {
                width: 16px;
                margin-right: 4px;
                vertical-align: middle;
              }
              span {
                vertical-align: middle;
              }
            }
          }
        }
        .reply-write-length {
          font-size: 14px;
          line-height: 17px;
          color: #7b858e;
          position: absolute;
          right: 100px;
          bottom: 12px;
        }
        .reply-write-submit {
          position: absolute;
          right: 0;
          bottom: 0;
          .reply-submit {
            cursor: pointer;
            width: 92px;
            padding: 10px 9px;
            line-height: 20px;
            font-size: 16px;
            border-radius: 0;
            border-color: #46cfa7;
            background-color: #46cfa7;
            color: #fff;
            border: none;
            &:hover {
              background-color: #16ae81;
            }
          }
        }
      }
    }
  }
  .reply-meta {
    line-height: 17px;
    font-size: 14px;
    color: #7b858e;
    .reply-name {
      font-weight: 700;
      color: #1e2022;
      word-wrap: break-word;
      word-break: break-all;
      margin-right: 5px;
    }
    .reply-date {
      &::before {
        display: inline-block;
        content: "";
        height: 12px;
        border-left: 1px solid #ebeef1;
        margin-left: 4px;
        padding-left: 8px;
      }
    }
  }
  .reply-text {
    margin-top: 8px;
    line-height: 20px;
    font-size: 14px;
    color: #1e2022;
    word-wrap: break-word;
    word-break: break-all;
    overflow: auto;
    max-height: 400px;
    p {
    }
  }
  .reply-buttons {
    margin-top: 8px;
    ul {
      display: flex;
      li {
        .reply-button {
          line-height: 17px;
          font-size: 14px;
          color: #7b858e;
          background: none;
          border: none;
          cursor: pointer;
          &:first-child {
            padding-left: 0px;
            padding-right: 15px;
          }
          img {
            margin-right: 5px;
            vertical-align: middle;
          }
        }
      }
    }
  }
`;
export const ReplyItemContainer = styled.li`
  position: relative;
  padding: 12px 12px 12px 0;
  box-sizing: border-box;
  &::before {
    position: absolute;
    top: 12px;
    left: -30px;
    content: "";
    width: 12px;
    height: 12px;
    border-left: 1px solid #c5cbd0;
    border-bottom: 1px solid #c5cbd0;
  }
`;
export const SidebarContainer = styled.div`
  width: 300px;
  background-color: #fff;
  .sidebar-menu-content {
    .sidebar-menu {
      border-top: 1px solid #ebeef1;
      padding: 9px 16px 8px;
      box-sizing: border-box;
      &.title {
        border: none;
        padding-bottom: 8px;
        line-height: 15px;
        font-size: 12px;
        color: #7b858e;
        box-sizing: border-box;
      }
      &.list {
        border: none;
      }
      &.item {
        cursor: pointer;
        border: none;
        line-height: 17px;
        font-size: 14px;
        color: #1e2022;
        border-radius: 4px;
        &:hover {
          border-radius: 4px;
          background: #d13639;
          color: #fff;
        }
        &.active {
          color: #fff;
          border-radius: 4px;
          background: #d13639;
        }
      }
    }
  }
`;
export const SidebarRightContainer = styled.div`
  width: 300px;
  background-color: #fff;

  .sidebar-right-header {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid #ebeef1;
    align-items: baseline;
    vertical-align: middle;
    strong {
      color: #1e2022;
      font-size: 18px;
      font-weight: 600;
    }
    em {
      color: #8b99a6;
      font-size: 12px;
    }
  }
  .sidebar-right-body {
    padding: 0 16px 14px;
    font-size: 14px;
    color: #1e2022;
    box-sizing: border-box;
    .sidebar-right-menu {
      padding-top: 8px;
      color: #7b858e;
      font-size: 12px;
      margin: 9px 0 15px;
      display: flex;
      li {
        margin-left: 4px;
        display: inline-block;
        padding: 2px 8px;
        border-radius: 11px;
        cursor: pointer;
        border: 1px solid #d13639;
        color: #d13639;
      }
    }
    .sidebar-right-list {
      font-size: 14px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      vertical-align: middle;
      li {
        margin-bottom: 5px;
        a {
          .category {
            margin-right: 5px;
          }
          .sidebar-right-list-title {
          }
        }
      }
    }
  }
  .sidebar-right-list {
  }
`;
export const LeaderboardsBannerContainer = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  height: 79.5vh;
  .lb-background-wrapper {
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    background-color: #0f1923;
    .lb-background {
      display: block;
      background-image: url("/images/leaderboards/leaderboards-hero-banner.jpg");
      background-position: 0 0;
      background-repeat: no-repeat;
      background-size: cover;
      height: 120%;
    }
    .lb-text {
      position: absolute;
      bottom: -9%;
      left: 33.65%;
      font-family: "BlackHanSans-Regular", sans-serif;
      line-height: 1;
      font-size: 90px;
      color: #ece8e1;
      transition: 1s;
      transform: translate(-50%, 100%);
      h2 {
      }
    }
  }
`;
export const LeaderboardsContentsContainer = styled.section`
  background-color: #ece8e1;
  padding: 0 7.3%;
  height: auto;
  overflow-x: hidden;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  .section-wrapper {
    max-width: 1230px;
    height: auto;
    position: relative;
    width: 100%;
    margin: 0 auto;
  }
`;
export const LeaderboardsSearchContainer = styled.div`
  &.search {
    margin-bottom: 50px;
    margin-top: 50px;
    padding: 0;
    .lb-form {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      label {
        color: #0f1923;
        margin-right: 15px;
        font-size: 18px;
      }
      .search-bar {
        max-width: 408px;
        position: relative;
        width: 100%;
        input {
          padding: 20px 50px 20px 20px;
          box-sizing: border-box;
          background-color: #dbd9d2;
          border: 1px solid #8b978f;
          width: 100%;
          color: #768079;
          outline: none;
          font-size: 18px;
        }
        button {
          cursor: pointer;
          align-items: center;
          display: flex;
          outline: none;
          position: absolute;
          top: 50%;
          right: 16px;
          background-color: transparent;
          border: none;
          transform: translateY(-50%);
          .icon {
            display: inline-block;
            pointer-events: none;
            height: 24px;
            width: 24px;
            svg {
              display: block;
              height: 100%;
              width: 100%;
              fill: currentColor;
            }
          }
        }
      }
    }
  }
`;
export const LeaderboardsSearchFillterContainer = styled.div`
  display: flex;
  .category-badge-wrapper,
  .rank-drop-down-wrapper,
  .act-drop-down-wrapper {
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #0f1923;
    border: 1px solid #8b978f;
    padding: 15px 0;
    box-sizing: border-box;
  }
  .category-badge-wrapper {
    width: 20.5%;
    max-width: 130px;
    .category-badge {
      display: block;
      height: auto;
      position: relative;
      width: 48.2%;
      background-image: url("/images/leaderboards/radiant-badge.png");
      background-repeat: no-repeat;
      background-size: auto;
      background-position: 50%;
      &::before {
        content: "";
        display: block;
        width: 100%;
        padding-top: 100%;
      }
    }
  }
  .rank-drop-down-wrapper {
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 56%;
    .rank-copy-wrapper {
      align-items: center;
      display: flex;
      flex-direction: column;
      .fillter-sub-title {
        color: #ece8e1;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
      }
      .fillter-title {
        color: #ece8e1;
        width: 100%;
        text-align: center;
        font-size: 48px;
        font-family: "BlackHanSans-Regular", sans-serif;
        line-height: 1.2;
      }
    }
  }
  .act-drop-down-wrapper {
    cursor: pointer;
    max-width: 200px;
    padding: 20px 60px 20px 15px;
    width: 100%;
    .subfillter-sub-title {
      margin-bottom: 10px;
      color: #ece8e1;
      font-size: 14px;
      line-height: 1;
      text-align: center;
    }
    .subillter-title {
      text-align: center;
      font-size: 40px;
      color: #ece8e1;
      width: 100%;
      font-family: "BlackHanSans-Regular", sans-serif;
    }
  }
`;
export const LeaderboardsLabelWrapperContainer = styled.div`
  &.label {
    margin-top: 30px;
    margin-bottom: 7px;
    color: #768079;
    align-items: center;
    display: flex;
    font-size: 12px;
    line-height: 1.5;

    .rank-label {
      width: 20.5%;
      max-width: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .rating-label-wrapper {
      width: 56%;
      flex-grow: 1;
      .rating-label {
        color: #39b54a;
        max-width: 120px;
        width: 30.5%;
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
    .time-label {
      align-items: center;
      display: flex;
      justify-content: center;
      width: 23.5%;
      max-width: 200px;
    }
  }
`;
export const LeaderboardsListWrapperContainer = styled.div`
  .lb-list {
    .lb-item {
      background-color: #e3dfd9;
      border-bottom: 3px solid hsla(50, 4%, 73%, 0.4);
      padding-top: 3px;
      position: relative;
      display: flex;
      height: 65px;
      text-align: -webkit-match-parent;
      .lb-rank-wrapper {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 20.5%;
        max-width: 130px;
        .lb-rank {
          font-size: 32px;
          font-family: "BlackHanSans-Regular", sans-serif;
        }
      }
      .lb-player-wrapper {
        background-color: hsla(47, 11%, 84%, 0.6);
        display: flex;
        flex-grow: 1;
        width: 56%;
        .lb-rating-wrapper {
          background-color: #dbd9d2;
          align-items: center;
          display: flex;
          flex-grow: 1;
          justify-content: center;
          max-width: 6rem;
          width: 30.5%;
          max-width: 120px;
          .lb-rating-badge {
            height: 35px;
            width: auto;
          }
          .lb-rating {
            font-size: 14px;
            margin-left: 10px;
          }
        }
        .lb-player-name {
          align-items: center;
          display: flex;
          font-size: 16px;
          width: 69.5%;
          padding-left: 7.9%;
        }
      }
      .lb-wins-wrapper {
        align-items: center;
        display: flex;
        flex-grow: 1;
        justify-content: center;
        width: 23.5%;
        flex-direction: row;
        max-width: 200px;
        .wins-value {
          margin-left: 5px;
          font-size: 14px;
        }
        .wins-label {
          margin-left: 5px;
          color: #768079;
          font-size: 14px;
        }
      }
      &.on {
        background-color: #ffe100;
      }
    }
  }
`;
export const LeaderboardsFooterContainer = styled.div`
  &.footer {
    margin-bottom: 100px;
    margin-top: 30px;
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    .lb-pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      .pagination-btn {
        cursor: pointer;
        margin-right: 5px;
        background-color: #0f1923;
        border: none;
        transition: background-color 0.2s ease-out;
        height: 44px;
        outline: none;
        width: 44px;
        .pagination-icon {
          align-items: center;
          display: flex;
          height: 100%;
          justify-content: center;
          width: 100%;
          &.left {
            transform: rotate(180deg);
          }
        }
      }
      .page-count-wrapper {
        margin-right: 5px;
        background-color: #0f1923;
        color: #768079;
        align-items: center;
        display: flex;
        height: 44px;
        justify-content: center;
        width: 200px;
        font-size: 16px;
        line-height: 1.5;
        .page-count-copy {
          /* color: #ece8e1; */
        }
        .page-count {
        }
      }
    }
  }
`;
export const FooterContainer = styled.footer`
  width: 100%;
  height: 630px;
  margin: auto;
  background-color: #111;
  .footer-links {
    padding: 24px;
    background-color: #292929;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        border-radius: 7px;
        padding: 8px 16px;
        box-sizing: border-box;
        &:hover {
          background-color: #444444;
        }
        a {
          color: #f9f9f9;
          font-weight: 700;
          font-size: 13px;
        }
      }
    }
  }
  .social-links {
    padding: 18px;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        width: 32px;
        height: 32px;
        border-radius: 12px;
        background-color: #292929;
        text-align: center;
        margin-right: 15px;
        a {
          vertical-align: middle;
          line-height: 34px;
          color: #f9f9f9;
          font-size: 18px;
        }
      }
    }
  }
  .footer-logos {
    text-align: center;
    .main-logos {
      img {
        width: 98px;
      }
    }
  }
  .footer-copyright {
    width: 640px;
    color: #7e7e7e;
    margin: auto;
    font-size: 13px;

    p {
      text-align: center;
    }
    .markup {
      text-align: center;
    }
  }
  .legal-links {
    padding-top: 24px;
    padding-bottom: 28px;
    font-weight: 700;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      li {
        padding: 8px 16px;
        border-radius: 7px;
        box-sizing: border-box;
        transition: 0.3s;
        &:hover {
          background-color: #292929;
        }
        a {
          font-size: 13px;
          color: #f9f9f9;
        }
      }
    }
  }
  .game-rating {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      padding: 8px 12px;
      background-color: #292929;
      border-radius: 8px;
    }
  }
`;
export const GoodsContainer = styled.div`
  background: #ece8e1;
  position: relative;

  .goods-top {
    padding-top: 50px;
    padding-left: 7.3%;
    padding-right: 7.3%;
    overflow: hidden;
    position: relative;
    height: auto;

    &::before {
      box-sizing: border-box;
      content: "";
      height: 100%;
      width: 63%;
      background-color: #ff4456;
      position: absolute;
      display: block;
      top: 0;
      right: 0;
    }

    .section-wrap {
      padding: 0;
      margin: 0 auto;
      height: auto;
      max-width: 1230px;
      position: relative;

      .logo-wrap1 {
        position: absolute;
        top: 30%;
        left: -5%;

        .icon-wrap {
          width: 1400px;
          display: inline-block;
          box-sizing: border-box;
          pointer-events: none;

          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            pointer-events: none;

            path {
              fill: transparent;
              stroke: rgba(9, 9, 9, 0.1);
              stroke-width: 0.5px;
            }
          }
        }
      }

      .goods-info {
        display: flex;
        flex-direction: row;
        border-top: 1px solid #ece8e1;

        .info-text {
          padding: 30px 0 0 0;
          position: relative;
          height: 450px;

          div {
            .goods-title {
              padding: 10px 0;
              overflow: hidden;
              position: relative;
              height: 80px;
              text-align: center;

              span {
                position: absolute;
                line-height: 0.9;
                display: inline-block;
                font-size: 108px;
                color: #ece8e1;
                font-family: "BlackHanSans-Regular", sans-serif;

                &.active {
                  animation: mediaG 0.8s ease-out forwards;
                }
              }
            }
            @keyframes mediaG {
              0% {
                top: 150%;
              }
              100% {
                top: 5%;
              }
            }

            .goods-description {
              margin: 10px 0 30px 41px;
              padding: 20px 0 0;
              position: relative;
              width: 450px;
              text-align: right;

              div {
                position: absolute;
                top: 0;
                p {
                  color: #ece8e1;
                  font-size: 16px;
                  line-height: 1.5;
                  display: block;
                  width: 450px;
                  word-break: keep-all;

                  &:first-child {
                    padding-bottom: 12.5px;
                  }
                }
                &.active {
                  animation: mediaSlideUp 0.9s ease-out forwards;
                  transition: opacity 0.5;
                }
                @keyframes mediaSlideUp {
                  0% {
                    top: 250%;
                  }
                  100% {
                    top: 0;
                  }
                }
                &::before {
                  box-sizing: border-box;
                  content: "";
                  width: 4px;
                  height: 4px;
                  background-color: #ece8e1;
                  position: absolute;
                  right: 0;
                  bottom: -20px;
                  box-sizing: border-box;
                }
              }
            }
          }

          .info-decoration {
            width: 490px;
            height: 110px;
            border: 1px solid #ece8e1;
            border-left: none;
            border-bottom: none;
            position: absolute;
            bottom: 0;

            &::before {
              box-sizing: border-box;
              content: "";
              display: block;
              height: 3px;
              position: absolute;
              right: 70px;
              top: -1px;
              width: 180px;
              background-color: #ff4456;
            }

            &:after {
              content: "";
              display: block;
              height: 4px;
              width: 4px;
              position: absolute;
              right: 0;
              bottom: 0;
              z-index: 1000;
              background-color: #8b978f;
            }
          }
        }
        .info-image {
          position: relative;
          width: 100%;
          content: "";
          display: block;

          &::after {
            box-sizing: border-box;
            content: "";
            background-color: #ff4456;
            display: block;
            height: 30px;
            width: 30px;
            position: absolute;
            top: 0;
            right: 0;
          }

          .image-box {
            background-image: url("/images/goods/goods_Header.jpg");
            background-position: 50%;
            background-size: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            opacity: 1;

            &.active {
              animation: slideUpG 0.6s ease-out forwards;
            }
          }

          @keyframes slideUpG {
            0% {
              top: 100%;
            }
            100% {
              top: 0;
            }
          }

          .image-left-decoration {
            width: 1200px;
            height: 45px;
            background-color: #ece8e1;
            position: absolute;
            right: 0;
            bottom: -1px;
            transform: translateX(100%);
            box-sizing: border-box;
            display: block;
            z-index: 999;

            &::after {
              box-sizing: border-box;
              content: "";
              background-color: #ece8e1;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              transform: skew(315deg);
              transform-origin: top left;
              z-index: -1;
            }
          }

          .image-right-decoration {
            border: 1px solid #ece8e1;
            height: 70px;
            width: 70px;
            position: absolute;
            bottom: 0;
            left: 0;

            &::before {
              box-sizing: border-box;
              content: "";
              height: 4px;
              width: 4px;
              background-color: #ece8e1;
              position: absolute;
              right: 0;
              bottom: 0;
            }
            &::after {
              box-sizing: border-box;
              content: "";
              display: block;
              position: absolute;
              width: 90%;
              top: 50%;
              left: 10%;
              transform: scale(1) rotate(-45deg);
              color: #ece8e1;
              border-top: 1px solid;
            }
          }
        }
      }
    }
  }

  .goods-mid {
    padding-top: 40px;
    background-color: #ece8e1;

    .section-wrap {
      padding: 40px 0;
      margin: 0 auto;
      height: auto;
      max-width: 1230px;
      position: relative;
      display: flex;
      justify-content: space-between;

      .menu-box {
        ul {
          margin-right: 30px;
          display: flex;
          margin-bottom: 0;
          padding: 0;
          align-items: center;
          flex-shrink: 1;
          flex-wrap: wrap;
          min-height: 80px;

          .menu-btn {
            margin-right: 20px;
            color: #0f1923;
            cursor: pointer;
            padding-bottom: 10px;
            position: relative;
            box-sizing: border-box;

            &::before {
              box-sizing: border-box;
              content: "";
              width: 0;
              height: 1.5px;
              position: absolute;
              background-color: #0f1923;
              bottom: -2px;
              left: 0;
            }

            &:hover {
              color: #ff4456;
              transition: 0.2s ease-in-out;
            }

            &:hover::before {
              width: 100%;
              transition: 0.3s ease-in-out;
            }

            &.active {
              &::after {
                box-sizing: border-box;
                content: "";
                width: 100%;
                height: 1.5px;
                position: absolute;
                background-color: #0f1923;
                bottom: -2px;
                left: 0;
              }
            }
          }
        }
      }

      .cart-btn {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
        background: transparent;
        cursor: pointer;

        &::before {
          box-sizing: border-box;
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 40%;
          pointer-events: none;
          border: 1px solid #bdbcb5;
          border-bottom: none;
        }

        &::after {
          box-sizing: border-box;
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40%;
          border: 1px solid #bdbcb5;
          border-top: none;
          pointer-events: none;
        }

        div {
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        span {
          font-weight: 500;
          color: #0f1923;

          em {
            font-weight: bold;
            color: #ff4456;
          }
        }
      }
    }
  }
  .goods-bot {
    background: #ece8e1;
    padding-bottom: 40px;

    .goods-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 1230px;
      margin: 0 auto;
      padding: 40px 0;
      position: relative;

      .logo-wrap2 {
        position: absolute;
        top: 0;
        right: -30%;

        .icon-wrap {
          width: 1400px;
          display: inline-block;
          box-sizing: border-box;
          pointer-events: none;

          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            pointer-events: none;

            path {
              fill: transparent;
              stroke: rgba(9, 9, 9, 0.1);
              stroke-width: 0.5px;
            }
          }
        }
      }
    }
  }
`;
export const ProductContainer = styled.div`
  margin-bottom: 15px;

  .product-item {
    background: #ece8e1;
    width: 280px;
    height: 370px;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    &:hover {
      h4 {
        color: #ece8e1;
      }
      button.on {
        background-color: #ece8e1;
        color: #ff4655;
      }
    }

    &::before {
      box-sizing: border-box;
      content: "";
      position: absolute;
      z-index: 5;
      width: inherit;
      height: 370px;
      left: -100%;
      bottom: 0;
      background: linear-gradient(to bottom left, transparent 50%, #ff4655 50%);
      transition: 0.3s;
    }
    &:hover::before {
      left: 0;
    }

    img {
      width: 100%;
      position: relative;
      z-index: 8;
    }

    h4 {
      font-size: 13px;
      font-weight: bold;
      margin-bottom: 5px;
      color: #ff4655;
      z-index: 7;
      position: relative;
    }

    h3 {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      z-index: 7;
      position: relative;
    }

    p {
      display: flex;
      justify-content: space-between;
      z-index: 7;
      position: relative;

      span {
        display: block;
        text-align: center;
        font-weight: 500;
      }

      button.on {
        width: 50%;
        border: none;
        background-color: #ff4655;
        border-radius: 5px;
        color: #ece8e1;
        position: relative;
        overflow: hidden;
        transition: color 150ms ease-in-out;
        cursor: pointer;
        z-index: 6;

        &:after {
          content: "";
          position: absolute;
          display: block;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 100%;
          background: #111;
          z-index: -1;
          transition: width 150ms ease-in-out;
        }

        &:hover {
          color: #ece8e1;
          &:after {
            width: 110%;
          }
        }
      }

      button.off {
        border: none;
        background: #111;
        color: #ece8e1;
        width: 50%;
        border-radius: 5px;
        cursor: pointer;
        z-index: 6;
      }
    }
  }
`;
export const GoodsCartContainer = styled.div`
  .cart-box {
    background: #ece8e1;
    position: relative;

    .cart-top {
      padding-top: 50px;
      padding-bottom: 50px;
      padding-left: 7.3%;
      padding-right: 7.3%;
      overflow: hidden;
      position: relative;
      height: auto;

      &::before {
        box-sizing: border-box;
        content: "";
        height: 100%;
        width: 63%;
        background-color: #ff4456;
        position: absolute;
        display: block;
        top: 0;
        right: 0;
        box-sizing: border-box;
      }
      &::after {
        box-sizing: border-box;
        content: "";
        height: 25px;
        width: 25px;
        background-color: #ece8e1;
        position: absolute;
        left: 37%;
        top: 0;
      }
      .section-wrap {
        padding: 0;
        margin: 0 auto;
        height: auto;
        max-width: 1230px;
        position: relative;

        .cart-title {
          border-top: 1px solid #ece8e1;
          border-bottom: 1px solid #ece8e1;
          position: relative;

          &::before {
            box-sizing: border-box;
            content: "";
            height: 50px;
            width: 1px;
            background-color: #ece8e1;
            position: absolute;
            right: 0;
            bottom: -51px;
          }
          &::after {
            box-sizing: border-box;
            content: "";
            height: 50px;
            width: 470px;
            background-color: #ece8e1;
            position: absolute;
            left: 0;
            bottom: -51px;
            transform: skew(315deg);
            transform-origin: top left;
          }
          h2 {
            text-align: center;
            color: #ece8e1;
            font-size: 108px;
            font-family: "BlackHanSans-Regular", sans-serif;
          }
          .deco {
            border-bottom: 1px solid #ff4456;
            height: 1px;
            width: 200px;
            position: absolute;
            bottom: -1px;
            right: 100px;
          }
        }
      }
    }
    .cart-empty {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 300px;
      position: relative;
      .logo-wrap {
        position: absolute;
        top: 15%;

        .icon-wrap {
          width: 1400px;
          display: inline-block;
          box-sizing: border-box;
          pointer-events: none;

          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            pointer-events: none;

            path {
              fill: transparent;
              stroke: rgba(9, 9, 9, 0.1);
              stroke-width: 0.5px;
            }
          }
        }
      }

      .inner {
        border: none;
      }

      h1 {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: #ff4655;
        margin-bottom: 30px;
      }
      p {
        text-align: center;

        button {
          font-weight: bold;
          width: 150px;
          height: 40px;
          border: 1px solid #ff4655;
          border-radius: 5px;
          color: #ff4655;
          background-color: #111;
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: color 150ms ease-in-out;
          cursor: pointer;

          &:after {
            content: "";
            position: absolute;
            display: block;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 100%;
            background: #ff4655;
            z-index: -1;
            transition: width 150ms ease-in-out;
          }

          &:hover {
            color: #ece8e1;
            &:after {
              width: 110%;
            }
          }
        }
      }
    }
  }

  .cart-bot {
    background: #ece8e1;
    min-height: 705px;

    .section-wrap {
      padding: 40px 0;
      margin: 0 auto;
      height: auto;
      max-width: 1230px;
      position: relative;
      display: flex;
      justify-content: space-between;

      .logo-wrap {
        position: absolute;
        top: 40%;
        right: -10%;

        .icon-wrap {
          width: 1400px;
          display: inline-block;
          box-sizing: border-box;
          pointer-events: none;

          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            pointer-events: none;

            path {
              fill: transparent;
              stroke: rgba(9, 9, 9, 0.1);
              stroke-width: 0.5px;
            }
          }
        }
      }

      .cart-list {
        z-index: 999;

        article {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
          font-size: 20px;
          background: #ece8e1;
          padding: 5px 20px 5px 20px;
          width: 700px;
          border: 1px solid #bdbcb5;

          &:hover .zoomed-image {
            display: block;
          }
          .small-image {
            width: 120px;
          }
          .zoomed-image {
            position: absolute;
            top: 263px;
            right: 0;
            display: none;
            width: 459px;
            height: 459px;
            z-index: 9999;
            border: none;

            img {
              width: 460px;
            }
          }

          .goods-info {
            width: 400px;
            h3 {
              font-weight: bold;
            }
            span {
            }
          }
          .del-btn {
            font-weight: bold;
            width: 50px;
            height: 50px;
            border: 1px solid #ff4655;
            background: #ece8e1;
            color: #ff4655;
            position: relative;
            overflow: hidden;
            z-index: 1;
            transition: color 150ms ease-in-out;
            cursor: pointer;

            &:after {
              content: "";
              position: absolute;
              display: block;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 0;
              height: 100%;
              background: #ff4655;
              z-index: -1;
              transition: width 150ms ease-in-out;
            }

            &:hover {
              color: #ece8e1;
              &:after {
                width: 110%;
              }
            }

            &:hover svg path {
              stroke: #ece8e1;
            }

            svg path {
              stroke: #ff4655;
            }
          }
        }
      }
      .cart-order {
        width: 460px;
        margin-left: 20px;
        font-size: 18px;
        background: transparent;
        z-index: 999;

        .order-box {
          border: 1px solid #bdbcb5;
          height: 130px;
          background: #ece8e1;

          p {
            display: flex;
            justify-content: space-between;
            line-height: 2.5;

            strong {
              display: block;
              font-weight: 700;
              margin-left: 10px;
            }

            span {
              margin-right: 10px;
              color: #ff4456;
              font-weight: bold;
            }
          }
        }
      }

      .order-btn {
        margin-top: 15px;
        margin-bottom: 15px;
        margin-right: 15px;
        width: 215px;
        height: 60px;
        background-color: #ece8e1;
        border: 1px solid #bdbcb5;
        color: #000;
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        overflow: hidden;
        font-weight: bold;

        &::before {
          box-sizing: border-box;
          content: "";
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #ff4655;
          display: block;
          transform: translateX(-120%) skewX(-10deg);
          position: absolute;
          transition: 0.3s ease;
          mix-blend-mode: multiply;
        }

        &:hover {
          &::before {
            transform: translateX(0) skewX(-10deg) scaleX(1.35);
            transition: transform 0.3s ease-in;
          }
        }
      }
      .back-btn {
        margin-top: 15px;
        width: 230px;
        height: 60px;
        background-color: #000;
        border: 1px solid #bdbcb5;
        color: #ece8e1;
        font-size: 20px;
        cursor: pointer;
        position: absolute;
        right: 0;
        overflow: hidden;
        font-weight: bold;

        &::before {
          box-sizing: border-box;
          content: "";
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #ff4655;
          display: block;
          transform: translateX(-120%) skewX(-10deg);
          position: absolute;
          transition: 0.3s ease;
          mix-blend-mode: multiply;
        }

        &:hover {
          &::before {
            transform: translateX(0) skewX(-10deg) scaleX(1.35);
            transition: transform 0.3s ease-in;
          }
        }
      }
    }
    .cart-preview {
      margin-top: 90px;
      width: 460px;
      height: 460px;
      border: 1px solid #bdbcb5;

      span {
        font-weight: bold;
        color: #ff4456;
        display: block;
        text-align: center;
      }
    }
  }
`;
export const MediaContainer = styled.div`
  background: #ece8e1;
  position: relative;

  .media-top {
    padding-top: 50px;
    padding-left: 7.3%;
    padding-right: 7.3%;
    overflow: hidden;
    position: relative;
    height: auto;

    &::before {
      box-sizing: border-box;
      content: "";
      height: 100%;
      width: 63%;
      background-color: #ff4456;
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      box-sizing: border-box;
    }

    .section-wrap {
      padding: 0;
      margin: 0 auto;
      height: auto;
      max-width: 1230px;
      position: relative;

      .logo-wrap {
        position: absolute;
        top: 30%;
        left: -5%;

        .icon-wrap {
          width: 1400px;
          display: inline-block;
          box-sizing: border-box;
          pointer-events: none;

          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;
            pointer-events: none;

            path {
              fill: transparent;
              stroke: rgba(9, 9, 9, 0.1);
              stroke-width: 0.5px;
            }
          }
        }
      }

      .media-info {
        display: flex;
        flex-direction: row;
        border-top: 1px solid #ece8e1;

        .info-text {
          padding: 30px 0 0 0;
          position: relative;
          height: 450px;

          div {
            .media-title {
              padding: 10px 0;
              overflow: hidden;
              position: relative;
              height: 80px;

              span {
                position: absolute;
                line-height: 0.9;
                display: inline-block;
                font-size: 108px;
                color: #ece8e1;
                font-family: "BlackHanSans-Regular", sans-serif;

                &.active {
                  animation: media 0.8s ease-out forwards;
                }
              }
            }
            @keyframes media {
              0% {
                top: 150%;
              }
              100% {
                top: 5%;
              }
            }

            .media-description {
              margin: 10px 41px 30px 0;
              padding: 20px 0 0;
              position: relative;
              width: 450px;

              div {
                position: absolute;
                top: 0;
                p {
                  color: #ece8e1;
                  font-size: 16px;
                  line-height: 1.5;
                  display: block;
                  width: 450px;
                  word-break: keep-all;

                  &:first-child {
                    padding-bottom: 12.5px;
                  }
                }
                &.active {
                  animation: mediaSlideUp 0.9s ease-out forwards;
                  transition: opacity 0.5;
                }
                @keyframes mediaSlideUp {
                  0% {
                    top: 250%;
                  }
                  100% {
                    top: 0;
                  }
                }
                &::before {
                  box-sizing: border-box;
                  content: "";
                  width: 4px;
                  height: 4px;
                  background-color: #ece8e1;
                  position: absolute;
                  left: 0;
                  bottom: -20px;
                  box-sizing: border-box;
                }
              }
            }
          }

          .info-decoration {
            width: 490px;
            height: 110px;
            border: 1px solid #ece8e1;
            border-right: none;
            border-bottom: none;
            position: absolute;
            bottom: 0;

            &::before {
              box-sizing: border-box;
              content: "";
              display: block;
              height: 3px;
              position: absolute;
              left: 70px;
              top: -1px;
              width: 180px;
              background-color: #ff4456;
            }

            &:after {
              content: "";
              display: block;
              height: 4px;
              width: 4px;
              position: absolute;
              left: 0;
              bottom: 0;
              z-index: 1000;
              background-color: #8b978f;
            }
          }
        }
        .info-image {
          position: relative;
          width: 100%;
          content: "";
          display: block;

          &::after {
            box-sizing: border-box;
            content: "";
            background-color: #ff4456;
            display: block;
            height: 30px;
            width: 30px;
            position: absolute;
            top: 0;
          }

          .image-box {
            background-image: url("/images/media/Media_Header.jpg");
            background-position: 50%;
            background-size: cover;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 100%;
            left: 0;
            opacity: 1;

            &.active {
              animation: slideUp 0.6s ease-out forwards;
            }
          }

          @keyframes slideUp {
            0% {
              top: 100%;
            }
            100% {
              top: 0;
            }
          }

          .image-left-decoration {
            width: 1200px;
            height: 45px;
            background-color: #ece8e1;
            position: absolute;
            left: 0;
            bottom: -1px;
            transform: translateX(-100%);
            box-sizing: border-box;
            display: block;
            z-index: 999;

            &::after {
              box-sizing: border-box;
              content: "";
              background-color: #ece8e1;
              position: absolute;
              top: 0;
              right: 0;
              width: 100%;
              height: 100%;
              transform: skew(45deg);
              transform-origin: top left;
              z-index: -1;
            }
          }

          .image-right-decoration {
            border: 1px solid #ece8e1;
            height: 70px;
            width: 70px;
            position: absolute;
            bottom: 0;
            right: 0;

            &::before {
              box-sizing: border-box;
              content: "";
              height: 4px;
              width: 4px;
              background-color: #ece8e1;
              position: absolute;
              left: 0;
              bottom: 0;
            }
            &::after {
              box-sizing: border-box;
              content: "";
              display: block;
              position: absolute;
              width: 90%;
              top: 50%;
              left: 10%;
              transform: scale(1) rotate(-45deg);
              color: #ece8e1;
              border-top: 1px solid;
            }
          }
        }
      }
    }
  }
  .media-mid {
    padding-top: 40px;
    background-color: #ece8e1;

    .section-wrap {
      padding: 40px 0;
      margin: 0 auto;
      height: auto;
      max-width: 1230px;
      position: relative;

      .media-filter {
        display: flex;
        align-content: center;
        justify-content: space-between;
        flex-direction: row;

        .filter-option {
          margin: 0;
          padding: 0;
          display: flex;
          overflow: hidden;
          width: auto;
          box-sizing: border-box;

          ul {
            margin-right: 30px;
            display: flex;
            margin-bottom: 0;
            padding: 0;
            align-items: center;
            flex-shrink: 1;
            flex-wrap: wrap;
            min-height: 80px;

            .media-btn {
              margin-right: 20px;
              color: #0f1923;
              cursor: pointer;
              padding-bottom: 10px;
              position: relative;
              box-sizing: border-box;

              &::before {
                box-sizing: border-box;
                content: "";
                width: 0;
                height: 1.5px;
                position: absolute;
                background-color: #0f1923;
                bottom: -2px;
                left: 0;
              }

              &:hover {
                color: #ff4456;
                transition: 0.2s ease-in-out;
              }

              &:hover::before {
                width: 100%;
                transition: 0.3s ease-in-out;
              }
              &.active {
                &::after {
                  box-sizing: border-box;
                  content: "";
                  width: 100%;
                  height: 1.5px;
                  position: absolute;
                  background-color: #0f1923;
                  bottom: -2px;
                  left: 0;
                }
              }
            }
          }
        }
      }
    }
  }
  .media-bot {
    background: #ece8e1;
    padding-bottom: 40px;

    .gallery-icon {
      width: 1400px;
      display: inline-block;
      box-sizing: border-box;
      position: absolute;
      top: 50%;
      left: 0;
      pointer-events: none;

      svg {
        fill: currentColor;
        display: block;
        height: 100%;
        width: 100%;
        overflow: hidden;
        pointer-events: none;

        path {
          fill: transparent;
          stroke: rgba(9, 9, 9, 0.1);
          stroke-width: 0.5px;
        }
      }
    }
    .section-wrap {
      padding: 40px 0;
      margin: 0 auto;
      height: auto;
      max-width: 1230px;
      position: relative;

      .gallery-grid {
        display: grid;
        grid-gap: 15px;
        grid-auto-rows: 1fr;
        position: relative;
      }

      .outer-div {
        width: 100%;

        .infinite-scroll {
          height: auto;
          overflow: auto;
          grid-gap: 30px;
          grid-auto-flow: dense;
          grid-template-columns: repeat(3, minmax(auto, 285px));
          place-content: center;
        }
      }
      .container {
        display: grid;
        grid-template-columns: repeat(4, 285px);
        grid-auto-rows: 240px;
        grid-gap: 30px;
        box-sizing: border-box;

        .item1 {
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 3;
        }

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-weight: bold;
          background: #000;
          color: #fff;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          cursor: pointer;

          .item-imgbox {
            width: 100%;
            height: 100%;
            position: relative;
            box-sizing: border-box;
            overflow: hidden;

            &::before {
              box-sizing: border-box;
              content: "";
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: #ff4455;
              display: block;
              transform: translateX(-120%) skewX(-10deg);
              position: absolute;
              z-index: 998;
              transition: 0.3s ease;
              mix-blend-mode: multiply;
            }

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transform: scale(1);
              transition: transform 0.3s ease;
            }

            &:hover {
              img {
                transform: scale(1.2);
                transition: transform 0.3s ease-in;
              }
              &::before {
                transform: translateX(0) skewX(-10deg) scaleX(1.35);
                transition: transform 0.3s ease-in;
                mix-blend-mode: multiply;
              }
            }
          }

          .item-text {
            box-sizing: border-box;
            position: absolute;
            align-items: center;
            left: 0;
            bottom: 0;
            color: #ece8e1;
            display: -ms-flexbox;
            display: flex;
            max-width: 90%;
            min-width: 50%;
            position: absolute;
            background-color: #0f1923;
            padding: 0 20px 15px;
            z-index: 999;

            &::after {
              border-right: 20px solid transparent;
              border-bottom: 15px solid #0f1923;
              left: 0;
              right: 0;
              bottom: 100%;
              content: "";
              display: block;
              position: absolute;
              box-sizing: border-box;
            }

            .item-icon {
              box-sizing: border-box;
              flex-shrink: 0;
              height: 20px;
              width: 20px;
              display: inline-block;
              pointer-events: none;
              margin-right: 15px;

              svg {
                display: block;
                height: 100%;
                width: 100%;
                overflow: hidden;

                path {
                  fill: #c5c8c0;
                }
              }
            }

            span {
              font-size: 14px;
              letter-spacing: -0.025em;
              line-height: 1.25;
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
  .popup {
    .popup-bg {
      z-index: 999;
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #0f1923;
      opacity: 0.7;
      box-sizing: border-box;
      display: block;
    }

    .media-popup {
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 1000px;
      height: auto;
      max-height: 765px;
      background-color: #0f1923;
      margin-top: 100px;
      padding-bottom: 20px;

      &::before {
        content: "";
        width: 20px;
        height: 20px;
        box-sizing: border-box;
        display: block;
        background-color: #ff4455;
        position: absolute;
        z-index: 999;
      }

      .media-box {
        position: relative;
        .swiper-button-prev {
          top: var(--swiper-navigation-top-offset, 96%);
          left: var(--swiper-navigation-sides-offset, 28%);
          &::after {
            font-size: 20px;
          }
        }
        .swiper-button-next {
          top: var(--swiper-navigation-top-offset, 96%);
          right: var(--swiper-navigation-sides-offset, 62%);
          &::after {
            font-size: 20px;
          }
        }
        .close-btn {
          border: 1px solid #ece8e1;
          background: none;
          padding: 0;
          cursor: pointer;
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          height: 70px;
          width: 70px;
          overflow: hidden;
          z-index: 999;

          svg {
            transform: scale(1);
            transition: transform 0.3s ease;
            path {
              fill: none;
              stroke: #ece8e1;
            }
          }

          &::before {
            box-sizing: border-box;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #0f1923;
            display: block;
            transform: translateX(-120%) skewX(-10deg);
            position: absolute;
            transition: 0.3s ease;
            mix-blend-mode: multiply;
          }
          &::after {
            content: "";
            box-sizing: border-box;
            display: block;
            width: 6px;
            height: 6px;
            position: absolute;
            background-color: #ece8e1;
            bottom: 0;
            right: 0;
          }

          &:hover {
            svg {
              transition: transform 0.3s ease-in;
              transform: scale(1.2);
            }
            &::before {
              transform: translateX(0) skewX(-10deg) scaleX(1.35);
              transition: transform 0.3s ease-in;
            }
          }
        }

        .image-title {
          display: flex;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 18px;
          color: #fff;
          text-align: center;
          background-color: #0f1923;
          padding: 5px;
          overflow: visible;
          width: 40%;

          svg {
            width: 20px;
            margin-right: 30px;
            margin-left: 30px;
            path {
              fill: none;
              stroke: #ece8e1;
            }
          }

          &::before {
            border-right: 20px solid transparent;
            border-bottom: 15px solid #0f1923;
            left: 0;
            right: 0;
            bottom: 100%;
            content: "";
            display: block;
            position: absolute;
            box-sizing: border-box;
          }
        }
      }
    }
  }
`;
export const WeaponInfoContainer = styled.section`
  width: 100%;
  background-color: #ece8e1;
  height: auto;
  padding-bottom: 200px;
  padding-top: 105px;
  padding-left: 7.3%;
  padding-right: 7.3%;
  overflow-x: hidden;
  position: relative;
  overflow: hidden;
  display: block;
  box-sizing: border-box;
  min-height: 800px;

  &::after {
    box-sizing: border-box;
    content: "";
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
    position: absolute;
    left: calc(50% - 615px);
    border-left: 1px solid rgba(9, 9, 9, 0.4);
  }

  .weapon-detail {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    font-size: 8px;
    max-width: 1230px;
    width: 85.4%;
    display: block;

    &::before {
      box-sizing: border-box;
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      top: 4em;
      left: 25%;
      background-color: #ff4655;
      font-size: 8px;
    }
    &::after {
      box-sizing: border-box;
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      position: absolute;
      top: 0;
      left: 75%;
      background-color: #ff4655;
      font-size: 8px;
    }
    .weapon-detail-dot1 {
      &::before {
        box-sizing: border-box;
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 0;
        left: 25%;
        background-color: #ff4655;
        font-size: 8px;
      }
      &::after {
        box-sizing: border-box;
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 0;
        left: 50%;
        background-color: #ff4655;
        font-size: 8px;
      }
    }
    .weapon-detail-dot2 {
      width: 40px;
      height: 4px;
      position: absolute;
      top: 0;
      background-color: #ff4655;
      box-sizing: border-box;

      &::before {
        box-sizing: border-box;
        content: "";
        display: block;
        width: 100px;
        height: 7px;
        position: absolute;
        top: 8em;
        background-color: #ff4655;
        font-size: 8px;
      }
    }
  }
  .weapon-layout {
    bottom: 0;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    display: block;

    .background-logo {
      bottom: auto;
      height: auto;
      overflow: visible;
      top: 800px;
      display: block;
      position: absolute;
      left: -10%;
      width: 100%;

      div {
        transform: translateY(-215.086px);
        display: block;
        box-sizing: border-box;

        .background-icon {
          transform: translateX(-46.5%);
          max-width: 15840px;
          position: absolute;
          top: 0;
          width: 1300px;
          display: inline-block;
          pointer-events: none;
          left: 50%;
          box-sizing: border-box;

          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
            pointer-events: none;

            path {
              stroke: #dbd9d2;
              fill: transparent;
              stroke-width: 0.5px;
            }
          }
        }
      }
    }
  }
  .weapon-wrapper {
    margin: 0 auto;
    padding: 40px 0;
    height: auto;
    max-width: 1230px;
    position: relative;
    width: 100%;
    display: block;

    &::before {
      box-sizing: border-box;
      content: "";
      display: block;
      position: relative;
      width: 100%;
      border-top: 1px solid #bdbcb7;
      margin-bottom: 30px;
    }

    .wrap-deco-left {
      background-image: url("/images/gameInfo/weapon/bg_img.png");
      background-position-y: 100px;
      background-repeat: repeat-y;
      background-position-x: 35%;
      right: 100%;
      display: block;
      height: 100%;
      max-width: 105px;
      overflow: hidden;
      position: absolute;
      top: 10px;
      width: 7.3vw;

      &::before {
        box-sizing: border-box;
        background-image: url("/images/gameInfo/weapon/bg_sprite.png");
        background-repeat: no-repeat;
        background-position: -35px -103px;
        content: "";
        position: absolute;
        left: 28%;
        width: 30px;
        display: block;
        height: 35px;
      }
      &::after {
        box-sizing: border-box;
        top: 1640px;
        left: 28%;
        background-image: url("/images/gameInfo/weapon/bg_sprite.png");
        background-repeat: no-repeat;
        background-position: -35px -345px;
        content: "";
        position: absolute;
        height: 42px;
        width: 30px;
      }
    }
    .wrap-deco-right {
      background-position-x: 80%;
      left: 100%;
      background-image: url("/images/gameInfo/weapon/bg_right.png");
      background-repeat: repeat-y;
      display: block;
      height: 100%;
      max-width: 105px;
      overflow: hidden;
      position: absolute;
      top: 10px;
      width: 7.3vw;
    }
    .title-container {
      position: relative;
      box-sizing: border-box;
      display: block;

      &::before {
        box-sizing: border-box;
        left: 50%;
        background-color: #8b978f;
        content: "";
        display: block;
        height: 0.15em;
        position: absolute;
        top: 26px;
        width: 3px;
      }
      &::after {
        box-sizing: border-box;
        left: 50%;
        background-color: #8b978f;
        content: "";
        display: block;
        height: 3px;
        position: absolute;
        top: 200px;
        width: 10px;
      }
      .vertical {
        margin-top: 30px;
        right: -0.15em;
        transform: rotate(90deg) translateX(100%);
        transform-origin: right top;
        display: block;
        font-size: 14px;
        border-bottom: none;
        position: absolute;
        color: #8b978f;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        font-weight: 400;
        box-sizing: border-box;

        .scamble-text {
          box-sizing: border-box;
          font-size: 14px;

          span {
            box-sizing: border-box;
            display: block;
            min-height: 1.15em;
            width: 115px;
            line-height: 1.3;
          }
        }
      }
      .horizontal {
        margin-right: calc(25% - 2.25rem);
        bottom: auto;
        top: 0;
        right: 1.2em;
        margin-top: 30px;
        transform: scaleX(-1);
        display: block;
        font-size: 10px;
        color: #ff4655;
        letter-spacing: 0.2em;
        position: absolute;
        text-transform: uppercase;
        word-break: keep-all;

        &::after {
          box-sizing: border-box;
          left: 0;
          transform-origin: left;
          border-bottom: 4px solid #ff4655;
          min-width: 160px;
          content: "";
          display: block;
          position: absolute;
          top: calc(100% + 0.5rem);
          width: auto;
        }
        .scamble-text {
          span {
            box-sizing: border-box;
            display: block;
            min-height: 1.15em;
            width: auto;
            line-height: 1.1;
          }
        }
      }
      .weapon-title {
        margin: 40px 0;
        line-height: 0.9;
        padding: 0.1em 0;
        color: #0f1923;
        font-size: 140px;
        font-family: "BlackHanSans-Regular", sans-serif;
        width: 100%;
        position: relative;
        overflow: hidden;
        padding-right: 45%;
        box-sizing: border-box;
        height: 280px;

        &::after {
          box-sizing: border-box;
          margin-right: calc(25% - 2.25rem);
          background-color: #ff4655;
          bottom: auto;
          content: "";
          display: block;
          height: 8px;
          position: absolute;
          top: 0.8em;
          width: 8px;
          right: 14px;
        }
        span {
          position: relative;
          word-break: keep-all;
          display: flex;

          &.active {
            animation: weapon 0.8s ease-out forwards;
          }
        }
        @keyframes weapon {
          0% {
            top: 150%;
          }
          100% {
            top: 0%;
          }
        }
      }
      .select {
        position: absolute;
        right: 0;
        width: calc(25% - 22.5px);
        background-color: #ece8e1;
        margin: 30px 0;
        bottom: -5px;
        height: auto;
        cursor: pointer;

        &::before {
          box-sizing: border-box;
          content: "";
          position: absolute;
          top: 0;
          width: 100%;
          height: 40%;
          pointer-events: none;
          border: 1px solid #bdbcb5;
          border-bottom: none;
        }
        &::after {
          box-sizing: border-box;
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 40%;
          border: 1px solid #bdbcb5;
          border-top: none;
          pointer-events: none;
        }

        &.active {
          ul {
            display: block;
          }
        }

        .selected {
          box-sizing: border-box;
          padding: 28px 0 27px 30px;
          color: #0f1923;
          font-weight: 700;
          height: 100%;
          width: 100%;
          line-height: 1.1;

          .selected-value {
            display: inline-block;
            width: 100%;
            font-size: 14px;
          }

          .select-icon {
            display: inline-block;
            pointer-events: none;
            box-sizing: border-box;
            font-weight: 700;
            margin-right: 20px;
            position: absolute;
            right: 0;
            top: 50%;
            height: 20px;
            width: 20px;
            color: #0f1923;
            transform: translateY(-50%) rotate(90deg);
            transition: 0.3s;

            svg {
              path {
                fill: none;
                stroke: #0f1923;
              }
            }

            &.active {
              transform: translateY(-50%) rotate(270deg);
              transition: 0.3s;
            }
          }
        }
        ul {
          display: none;
          position: absolute;
          width: 285px;
          background-color: #ece8e1;
          border: 1px solid #bdbcb5;
          border-top: none;
          margin: 0;
          padding: 0;
          list-style-type: none;
          z-index: 6;

          li {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding: 8px 5px;
            line-height: 1.1;
            padding: 15.4px 0 14px 30px;
            font-size: 14px;

            &:hover {
              background: #0f1923;
              color: #ece8e1;
              transition: 0.3s;
            }
          }
        }
      }
    }
    .weapon-list {
      margin: 70px 0;
      position: relative;
      box-sizing: border-box;
      display: block;
      &::before {
        box-sizing: border-box;
        content: "";
        position: absolute;
        display: block;
        height: 14px;
        top: 300px;
        left: -40px;
        width: 14px;
        background-color: #ff4655;
      }
      &::after {
        box-sizing: border-box;
        content: "";
        display: block;
        height: 10px;
        position: absolute;
        top: 400px;
        width: 10px;
        right: -30px;
        background-color: #ff4655;
      }
      .outer-div {
        box-sizing: border-box;

        .scroll {
          height: auto;
          display: flex;
          flex-wrap: wrap;

          .weapon-card {
            height: auto;
            transform: translateY(0);
            padding: 45px 48px;
            opacity: 1;
            width: 50%;
            position: relative;
            box-sizing: border-box;
            display: block;
            overflow: hidden;

            &::before {
              box-sizing: border-box;
              border: 1px solid #bdbcb7;
              width: 100%;
              height: 100%;
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              overflow: visible;
            }

            .weaponcard-bg {
              height: calc(100% + 0.1rem);
              overflow: hidden;
              position: absolute;
              top: 0;
              left: 0;
              width: 120%;
              box-sizing: border-box;
              transform: translateX(-10%) skew(-10deg);

              &::before {
                box-sizing: border-box;
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                left: -100%;
                background: #ff4655;
                transition: 0.3s;
              }
            }

            .weaponcard-detail {
              right: 48px;
              top: 63px;
              height: 10px;
              width: 10px;
              background-color: #8b978f;
              position: absolute;

              &::before {
                box-sizing: border-box;
                border-left: 0.3em solid transparent;
                border-right: 0.3em solid transparent;
                border-top: 0.4em solid;
                margin-top: 0.6em;
                content: "";
                right: 0;
                display: block;
                position: absolute;
                color: #8b978f;
              }
            }
            .weapon-container {
              position: relative;
              box-sizing: border-box;
              display: block;

              .heading {
                font-size: 80px;
                width: calc(100% - 0.5em);
                color: #0f1923;
                padding: 0.1em 0;
                font-family: "BlackHanSans-Regular", sans-serif;
                line-height: 0.94;
                text-transform: uppercase;
                display: block;

                h2 {
                  padding-bottom: 15px;
                  margin: 0;
                  font-size: 1em;
                  display: block;
                  overflow: hidden;
                  position: relative;
                  box-sizing: border-box;
                  span {
                  }
                }
              }
              .Weapon-figure {
                margin: 0;
                width: 100%;
                box-sizing: border-box;
                display: block;
                position: relative;
                display: inline-block;
                overflow: visible;

                img {
                  margin: 10px 0 4px -4%;
                  padding: 0 3%;
                  width: 108%;
                  box-sizing: border-box;
                  transition: transform 0.3s ease;
                  filter: drop-shadow(15px 22px 0 rgba(15, 25, 35, 0.17));
                }
              }
              .weapon-type {
                position: absolute;
                display: none;
                top: 110px;
                box-sizing: border-box;
                font-size: 17px;
                color: #ece8e1;

                strong {
                  display: block;
                  font-weight: 700;

                  span {
                    font-weight: 400;
                  }
                }
              }
              .weapon-des {
                position: absolute;
                top: 170px;
                display: none;

                ul {
                  max-width: 430px;
                  li {
                    margin-bottom: 30px;
                    padding-left: 55px;

                    .description {
                      position: relative;
                      font-weight: 700;
                      color: #ece8e1;

                      &::before {
                        box-sizing: border-box;
                        content: "";
                        position: absolute;
                        left: -11%;
                        transform: translateX(15%);
                        top: 20px;
                        background: #ece8e1;
                        width: 4px;
                        height: 4px;
                      }
                      &::after {
                        box-sizing: border-box;
                        content: "";
                        width: 35px;
                        height: 35px;
                        border: 1px solid #ece8e1;
                        position: absolute;
                        left: -15%;
                        top: 0;
                        margin-top: 5px;
                      }
                    }
                  }
                }
              }
              .explanation {
                padding-top: -11px;
                padding-right: 10%;
                color: #768079;
                margin: 0;
                display: block;
                font-size: 14px;
                line-height: 1.5;
                box-sizing: border-box;
                letter-spacing: 0;
              }
            }
            &:hover {
              .weaponcard-bg::before {
                left: 0;
              }
              .heading {
                h2 {
                  color: #ece8e1;
                }
              }
              .Weapon-figure {
                img {
                  opacity: 0.1;
                  transform: scale(0.9);
                  overflow: clip;
                }
              }
              .weapon-container {
                .explanation {
                  visibility: hidden;
                }
              }
              .weaponcard-detail {
                background-color: #ece8e1;
                &::before {
                  color: #ece8e1;
                }
              }
              .weapon-type {
                display: block;
              }
              .weapon-des {
                display: block;
              }
            }
          }
        }
      }
      .weapon-bottom-detail {
        margin-left: 50%;
        display: block;
        position: relative;
        width: 50%;

        &::before {
          box-sizing: border-box;
          margin-left: 35px;
          bottom: 10%;
          content: "";
          display: block;
          height: 8px;
          position: absolute;
          width: 120%;
          background: url("/images/gameInfo/weapon/bg_detail.png");
        }
        &::after {
          box-sizing: border-box;
          right: -30px;
          background-color: #ff4655;
          content: "";
          display: block;
          width: 9px;
          height: 9px;
          position: absolute;
          top: 440px;
        }
        .weapon-bottom-icon {
          margin-left: 40%;
          width: 80%;
          display: inline-block;
          pointer-events: none;
          box-sizing: border-box;

          &::before {
            box-sizing: border-box;
            left: 30px;
            background-color: #ff4655;
            bottom: -100px;
            content: "";
            display: block;
            height: 8px;
            position: absolute;
            width: 36px;
          }
          svg {
            fill: currentColor;
            display: block;
            height: 100%;
            width: 100%;
            overflow-clip-margin: content-box;
            overflow: hidden;
            pointer-events: none;

            path {
              fill: transparent;
              stroke: #bdbcb7;
              stroke-width: 0.5;
              box-sizing: border-box;
            }
          }
        }
        .weapon-bottom-icon-detail {
          left: 15%;
          bottom: 27%;
          position: absolute;

          &::before {
            box-sizing: border-box;
            left: calc(8.33333% + 0.25rem);
            border-bottom: 5px solid;
            bottom: -2.2px;
            color: #dbd9d2;
            content: "00.";
            display: block;
            font-size: 50px;
            position: absolute;
            font-family: "BlackHanSans-Regular", sans-serif;
            text-transform: uppercase;
          }
          &::after {
            box-sizing: border-box;
            bottom: 90px;
            content: "";
            display: block;
            height: 35px;
            position: absolute;
            width: 35px;
            background-color: #ff4655;
            font-family: "BlackHanSans-Regular", sans-serif;
          }
        }
      }
    }
  }
`;
export const MapInfoContainer = styled.div`
  background-color: #ece8e1;
  padding-left: 7.3%;
  padding-right: 7.3%;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: block;

  &::after {
    content: "";
    border-left: 1px solid hsla(0, 0%, 100%, 0.5);
    left: calc(50% - 616px);
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
    box-sizing: border-box;
  }

  .map-line {
    display: block;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    pointer-events: none;

    .map-text {
      overflow: hidden;
      margin: auto;
      text-transform: uppercase;
      padding: 0;
      font-size: 300px;
      line-height: 0.82;
      position: absolute;
      top: 0;
      white-space: nowrap;
      width: 100%;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #dbd8d2;
      font-weight: bold;
      left: calc(50vw - 720px - 0.07em);
      span {
        text-transform: uppercase;

        &:last-child {
          margin-left: 300px;
        }
      }
    }
  }
  .map-wrapper {
    margin: 0 auto;
    padding: 40px 0;
    height: auto;
    max-width: 1230px;
    position: relative;
    width: 100%;
    display: block;
    box-sizing: border-box;

    &::before {
      box-sizing: border-box;
      width: auto;
      z-index: 2;
      margin-bottom: 20px;
      content: "";
      display: block;
      height: 100%;
      pointer-events: none;
      position: absolute;
      top: 0;
      border-left-color: hsla(0, 0%, 100%, 0.5);
      border-top: none;
      border-left: 1px solid #f4f1ed;
      left: calc(25% + 0.75rem);
    }

    &::after {
      box-sizing: border-box;
      content: "";
      display: block;
      height: 100%;
      pointer-events: none;
      position: absolute;
      top: 0;
      border-right: 1px solid hsla(0, 0%, 100%, 0.5);
      right: 0;
      z-index: 2;
    }
    .map-title {
      height: 140px;
      margin-top: 20px;
      line-height: 0.9;
      padding: 0.1em 0;
      z-index: 4;
      position: relative;
      display: block;
      overflow: hidden;
      font-size: 156px;
      color: #0f1923;

      span {
        position: absolute;
        line-height: 0.9;
        display: inline-block;
        color: #0f1923;
        font-family: "BlackHanSans-Regular", sans-serif;

        &.active {
          animation: map 0.8s ease-out forwards;
        }
      }
      @keyframes map {
        0% {
          top: 150%;
        }
        100% {
          top: 5%;
        }
      }
      &::after {
        box-sizing: border-box;
        margin-right: 1px;
        right: 0;
        background-color: #ff4655;
        top: 30px;
        content: "";
        display: block;
        height: 4px;
        width: 4px;
        position: absolute;
      }
    }
    .map-container {
      margin-top: -90px;
      padding-bottom: 55px;
      padding-top: 0;
      padding-right: calc(50vw - 615px);
      width: calc(100% + 50vw - 800px);
      box-sizing: border-box;
      overflow: hidden;
      position: relative;
      display: block;

      .map-content {
        margin-left: calc(8.33333% + 18px);
        user-select: none;
        width: 1124px;

        .map-slider {
          position: relative;

          .map-swiper {
            overflow: visible;

            .swiper-wrapper {
              .swiper-slide {
                cursor: grab;
                justify-content: left;
                background-color: transparent;
                opacity: 0.5;

                img {
                  width: 80%;
                }
                &.swiper-slide-prev {
                  opacity: 1;
                  transition: 0.3s ease-in-out;
                }
                &.swiper-slide-next {
                  opacity: 0.5;
                  transition: 0.3s ease-in-out;
                  overflow: visible;
                }
                &.swiper-slide-active {
                  opacity: 1;
                  transition: 0.3s ease-out;
                }
              }
            }
          }
          .map-desc {
            background-color: #8b978f;
            display: block;
            box-sizing: border-box;
            width: 330px;
            height: auto;
            position: absolute;
            bottom: -10%;
            right: 8%;
            padding: 15px 30px 15px 35px;
            z-index: 2;
            transition: height 0.3s ease-in;

            &::before {
              box-sizing: border-box;
              display: block;
              background-color: #8b978f;
              position: absolute;
              content: "";
              font-size: 0.4rem;
              height: 1em;
              top: -1em;
              width: calc(100% - 1em);
              left: 0;
            }

            &::after {
              box-sizing: border-box;
              display: block;
              border-right: 1em solid transparent;
              border-bottom: 1em solid #ece8e1;
              left: 0;
              position: absolute;
              bottom: 0;
              content: "";
              width: 0;
              height: 0;
            }

            .map-desc-text {
              position: relative;

              .map-gallery-num {
                position: absolute;
                left: -37px;
                top: -33px;
                transform: rotate(270deg);
                font-weight: 700;
                color: #ece8e1;
              }
              h5 {
                font-weight: 400;
                color: #ece8e1;
                font-size: 21px;
                line-height: 1.25;
                box-sizing: border-box;
                display: block;
                margin: 10px 0;
              }
              span {
                font-size: 12px;
                color: #ece8e1;
                margin: 0;
                line-height: 1.5;
                display: block;
              }
              button {
                display: flex;
                margin: 20px 0;
                margin-bottom: 25px;
                box-sizing: border-box;
                align-items: center;
                background: none;
                border: none;
                padding: 0;
                cursor: pointer;

                p {
                  margin-right: 1em;
                  font-weight: 700;
                  color: #ece8e1;
                  font-size: 14px;
                  letter-spacing: -0.025em;
                  line-height: 1.25;
                }
                .map-icon {
                  height: 23px;
                  width: 23px;
                  display: inline-block;
                  pointer-events: none;
                  box-sizing: border-box;

                  svg {
                    display: block;
                    height: 100%;
                    width: 100%;
                    overflow-clip-margin: content-box;
                    overflow: hidden;
                    transform: rotate(180deg);
                    transition: 0.3s ease-in;

                    path {
                      fill: none;
                      stroke: #ece8e1;
                    }
                  }
                }

                &:hover {
                  svg {
                    transform: rotate(0);
                    transition: 0.3s ease-in;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .map-detail-wrapper {
    width: calc(100% - 50vw + 615px);
    height: calc(100% - 55px);
    pointer-events: none;
    position: absolute;
    top: 0;
    display: block;
    box-sizing: border-box;

    &::before {
      content: "";
      box-sizing: border-box;
      height: 100%;
      pointer-events: auto;
      position: absolute;
      left: 0;
      width: calc(8.33333% + 18px);
      background-color: #ece8e1;
      z-index: 3;
    }

    .tile-details {
      right: calc(16.66667% + 5px);
      left: 10%;
      font-size: 58px;
      width: calc(75% - 7.5px);
      height: 100%;
      top: 0;
      position: absolute;
      box-sizing: border-box;
      display: block;

      &::before {
        box-sizing: border-box;
        background-color: #0f1923;
        bottom: 1em;
        content: "";
        display: block;
        height: 4px;
        position: absolute;
        width: 4px;
        z-index: 1;
        left: 0;
      }
      .tile-details-right {
        right: calc(158px - 11.11111%);
        background-color: hsla(38, 22%, 90%, 0.5);
        bottom: 0;
        display: block;
        height: 2em;
        position: absolute;
        width: 2em;
        box-sizing: border-box;
        z-index: 3;

        &::before {
          box-sizing: border-box;
          right: 1em;
          background-color: hsla(38, 22%, 90%, 0.5);
          bottom: 0;
          content: "";
          display: block;
          height: 1em;
          position: absolute;
          width: 2em;
        }
        &::after {
          box-sizing: border-box;
          right: 0;
          background-color: #ece8e1;
          bottom: 0;
          content: "";
          display: block;
          height: 1em;
          position: absolute;
          width: 1em;
        }
      }
      .tile-details-left {
        box-sizing: border-box;
        background-color: #ece8e1;
        bottom: 1em;
        height: 1em;
        width: 1em;
        position: absolute;
        z-index: 3;

        &::before {
          box-sizing: border-box;
          background-color: hsla(38, 22%, 90%, 0.5);
          bottom: 0;
          height: 2em;
          width: 2em;
          content: "";
          display: block;
          position: absolute;
        }

        &::after {
          box-sizing: border-box;
          left: 0;
          background-color: #ece8e1;
          bottom: -1em;
          height: 1em;
          width: 2em;
          content: "";
          display: block;
          position: absolute;
        }
      }
      .tile-details-outer {
        right: -52.3%;
        bottom: 1em;
        display: block;
        height: 1em;
        position: absolute;
        width: 1em;
        background-color: hsla(38, 22%, 90%, 0.5);
        box-sizing: border-box;
        z-index: 3;

        &::before {
          box-sizing: border-box;
          margin: -1em auto auto 0;
          background-color: hsla(38, 22%, 90%, 0.5);
          clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%, 50% 50%, 0 50%);
          content: "";
          display: block;
          height: 2em;
          position: absolute;
          width: 2em;
        }

        &::after {
          box-sizing: border-box;
          background-color: #ece8e1;
          content: "";
          display: block;
          height: calc(1em + 0.2rem);
          position: absolute;
          top: calc(1em - 0.1rem);
          width: 4em;
        }

        .map-detail-box {
          border: 0.1rem solid #ece8e1;
          height: 100%;
          width: 100%;
          position: absolute;

          &::before {
            box-sizing: border-box;
            left: 0;
            bottom: 0;
            content: "";
            display: block;
            height: 0.4rem;
            position: absolute;
            width: 0.4rem;
            color: #ece8e1;
            opacity: 1;
          }
          &::after {
            box-sizing: border-box;
            transform: rotate(-45deg);
            opacity: 1;
            left: 10%;
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            width: 90%;
          }
        }
      }
    }
  }
`;
export const MapPopupContainer = styled.div`
  padding-top: 80px;
  background-color: rgba(15, 25, 35, 0.8);
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  box-sizing: border-box;
  display: block;

  .map-popup-bg {
    position: relative;
    width: 100%;
    min-height: 100%;
    background-color: #8b978f;
    padding-top: 70px;
    padding-left: 7.3%;
    padding-right: 7.3%;
    display: flex;
    color: #ece8e1;
    overflow-x: hidden;
    box-sizing: border-box;

    .map-bg-stoke {
      display: block;
      box-sizing: border-box;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      overflow: hidden;
      position: absolute;
      top: 0;
      width: 100%;
      user-select: none;

      .map-bg-text {
        text-transform: uppercase;
        left: calc(50vw - 46rem - 0.07em);
        padding: 0;
        margin: 0;
        line-height: 0.82;
        position: absolute;
        top: -20px;
        white-space: nowrap;
        width: 100%;

        span {
          display: block;
          font-size: 326px;
          -webkit-text-stroke-color: #99a29a;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
        }
      }
    }
    .map-section-wrapper {
      padding: 0;
      margin: 0 auto;
      align-items: center;
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
      min-height: 100%;
      height: auto;
      max-width: 1230px;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      width: calc(75% - 10rem + 50vw);
      /* overflow: hidden; */

      &::before {
        border-left-color: hsla(0, 0%, 100%, 0.5);
        border-top: none;
        margin-top: -7rem;
        border-left: 1px solid #f4f1ed;
        left: calc(25% + 0.75rem);
        height: calc(100% + 7rem);
        width: auto;
        z-index: 2;
        content: "";
        display: block;
        pointer-events: none;
        position: absolute;
        top: 0;
        box-sizing: border-box;
      }

      .map-popup-swiper {
        position: relative;
        left: calc(25% + 0.75rem);
        top: 0;
        overflow: hidden;
        width: 915px;
        box-sizing: border-box;
        display: block;
        height: auto;
        padding-bottom: 50px;
        background-color: transparent;
        margin: 0;
        user-select: none;

        .swiper-wrapper {
          width: 100%;
          height: 515px;

          .swiper-slide {
            margin: 0;
            display: flex;
            justify-content: left;
            cursor: grab;
            opacity: 0;

            &.swiper-slide-prev {
              opacity: 0;
              transition: 0.1s ease;
            }
            &.swiper-slide-active {
              opacity: 1;
              transition: 0.3s ease-out;
              margin-right: 30px;
              position: relative;
            }
            &.swiper-slide-next {
              opacity: 0.5;
              transition: 0.3s ease-in-out;
              overflow: visible;
              z-index: 9999;
            }

            img {
              width: 100%;
            }
          }
        }
        .map-count {
          position: absolute;
          bottom: -10px;
          right: 150px;
          transform: rotate(270deg);
          font-weight: bold;
          display: block;
          color: #ece8e1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          top: var(--swiper-navigation-top-offset, 95%);

          &::after {
            font-size: 20px;
          }
        }
        .swiper-button-prev {
          left: var(--swiper-navigation-sides-offset, 800px);

          &.swiper-button-disabled {
          }
        }
        .swiper-button-next {
          &.swiper-button-disabled {
          }
        }
      }
      .map-desc-box {
        padding-top: 60px;
        width: calc(25% - 2.25rem);
        height: 500px;
        margin-right: 3rem;
        margin-bottom: 4rem;
        position: absolute;
        box-sizing: border-box;
        display: block;

        &::after {
          box-sizing: border-box;
          display: block;
          content: "";
          width: 10px;
          height: 10px;
          position: absolute;
          bottom: 0;
          background-color: #ece8e1;
        }
        h4 {
          color: #ece8e1;
          margin: 20px 0;
          padding: 0.1em 0;
          font-family: "BlackHanSans-Regular", sans-serif;
          font-size: 6rem;
          word-break: keep-all;
          line-height: 1;
        }
        p {
          margin: 0;
          word-break: keep-all;
          font-size: 16px;
          line-height: 1.5;
          color: #ece8e1;
        }
      }
    }
  }

  .close-btn {
    border: 1px solid #ece8e1;
    background: none;
    padding: 0;
    cursor: pointer;
    display: block;
    position: absolute;
    top: 80px;
    right: calc(50vw - 35rem);
    height: 70px;
    width: 70px;
    overflow: hidden;
    z-index: 999;

    svg {
      transform: scale(1);
      transition: transform 0.3s ease;
      path {
        fill: none;
        stroke: #ece8e1;
      }
    }

    &::before {
      box-sizing: border-box;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: #0f1923;
      display: block;
      transform: translateX(-120%) skewX(-10deg);
      position: absolute;
      transition: 0.3s ease;
      mix-blend-mode: multiply;
    }
    &::after {
      content: "";
      box-sizing: border-box;
      display: block;
      width: 6px;
      height: 6px;
      position: absolute;
      background-color: #ece8e1;
      bottom: 0;
      right: 0;
    }

    &:hover {
      svg {
        transition: transform 0.3s ease-in;
        transform: scale(1.2);
      }
      &::before {
        transform: translateX(0) skewX(-10deg) scaleX(1.35);
        transition: transform 0.3s ease-in;
      }
    }
  }
`;
export const AgentListContainer = styled.section`
  background-color: #ece8e1;
  padding-left: 7.3%;
  padding-right: 7.3%;
  box-sizing: border-box;
  height: 645px;
  position: relative;
  width: 100%;
  display: flex;
  overflow: visible;
  flex-direction: column;

  &::after {
    box-sizing: border-box;
    display: block;
    left: calc(50% - 615px);
    border-left: 1px solid rgba(9, 9, 9, 0.4);
    content: "";
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .agent-background {
    background-color: #0f1923;
    position: absolute;
    top: 0;
    width: 100%;
    height: 645px;
    left: 0;
    max-height: 100%;

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .section-content {
    margin: 0 auto;
    padding: 40px 0;
    height: auto;
    max-width: 1230px;
    position: relative;
    width: 100%;
    height: 645px;
    align-items: center;
    display: flex;
    justify-content: flex-end;

    .name-wrapper {
      position: absolute;
      top: 0;
      left: -50px;
      width: calc(41.66667% + 12.5px);
      height: 645px;
      color: #ece8e1;
      display: flex;
      cursor: grab;

      .carousel-content {
        padding-left: 10px;
        padding-top: 0;
        height: 100%;
        opacity: 1;
        overflow: hidden;
        pointer-events: all;
        position: relative;
        display: block;
        user-select: none;
        flex: 1;

        .agent-list {
          position: relative;
          cursor: grab;

          span {
            position: absolute;
            left: 5px;
            top: 12px;
            font-size: 13px;
            font-weight: bold;
          }

          h2 {
            margin-left: 40px;
            font-family: "BlackHanSans-Regular", sans-serif;
            line-height: 0.99;
            font-size: 120px;
            transition: 0.2s ease-in-out;
          }

          &:hover {
            h2 {
              transform: translateX(10px);
              transition: 0.2s ease-in-out;
            }
          }
        }
      }
    }

    .agent-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 645px;
      display: block;
      pointer-events: none;

      img {
        opacity: 1;
        z-index: 1;
        visibility: inherit;
        right: 50%;
        margin-top: 10px;
        bottom: -130px;
        height: 118%;
        width: auto;
        backface-visibility: hidden;
        position: absolute;
        display: block;
        transform: translate(50%, -25.5833px);
      }
    }
    .agent-details {
      transform: translateY(-34.7414px);
      display: block;
      width: calc(25% + 7.5px);
      z-index: 1;

      .agent-hero-detail {
        min-height: 360px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .role-wrapper {
          display: block;
          .role-label {
            min-height: 25px;
            opacity: 1;
            margin: 0;
            line-height: 1.25;
            text-transform: uppercase;
            font-weight: 400;

            span {
              color: #ece8e1;
              font-size: 16px;
            }
          }
          .role-title-wrapper {
            margin-bottom: 30px;
            display: flex;
            h2 {
              transform: translate(0px, 0px);
              opacity: 1;
              color: #ece8e1;
              filter: brightness(1);
              padding: 0.1em 0;
              font-family: "BlackHanSans-Regular", sans-serif;
              font-size: 60px;
              line-height: 0.94;
              display: block;
            }
            img {
              transform: translate(0px, 0px);
              opacity: 0.9;
              color: #ece8e1;
              filter: brightness(1);
              margin-left: 5px;
              margin-top: 12px;
              height: 30px;
              width: 30px;
              transition: 0.3s ease-in;
            }
          }
        }
        .desc-wrapper {
          min-height: 240px;
          border-bottom: 1px solid #bdbcb7;
          padding-bottom: 40px;
          position: relative;
          display: block;
          box-sizing: border-box;

          &::before {
            box-sizing: border-box;
            display: block;
            background-color: #ece8e1;
            bottom: -50px;
            content: "";
            height: 8px;
            position: absolute;
            width: 8px;
          }

          h3 {
            color: #ece8e1;
            margin-bottom: 15px;

            span {
              font-size: 16px;
              line-height: 1.25;
            }
          }
          p {
            transform: translate(0px, 0px);
            opacity: 1;
            color: #ece8e1;
            margin: 0;
            font-size: 16px;
            line-height: 1.5;
          }
        }
      }
    }
  }
`;
export const AgentSkillContainer = styled.section`
  background-color: #ece8e1;
  padding-left: 7.3%;
  padding-right: 7.3%;
  box-sizing: border-box;
  height: auto;
  position: relative;
  overflow: hidden;
  width: 100%;

  &::after {
    box-sizing: border-box;
    display: block;
    border-left: 1px solid rgba(9, 9, 9, 0.4);
    left: calc(50% - 615px);
    content: "";
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .background-container {
    transform: translateY(20.619px);
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
    display: block;
    box-sizing: border-box;

    .background-side {
      padding-top: 50px;
      display: block;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;

      &::before {
        box-sizing: border-box;
        display: block;
        left: calc(50vw - 682px);
        background-image: url("/images/agent/background-splite.png");
        background-repeat: no-repeat;
        background-position: -95px 3px;
        content: "";
        display: block;
        position: absolute;
        height: 540px;
        width: 32px;
      }
      &::after {
        box-sizing: border-box;
        display: block;
        right: calc(50vw - 682px);
        background-image: url("/images/agent/background-splite.png");
        background-repeat: no-repeat;
        background-position: -339px -20px;
        content: "";
        display: block;
        position: absolute;
        height: 520px;
        width: 30px;
      }
    }
  }
  .content-wrapper {
    padding-bottom: 50px;
    padding-top: 220px;
    position: relative;
    max-width: 1230px;
    margin: 0 auto;
    /* padding: 40px 0; */
    z-index: 1;
    height: auto;
    width: 100%;
    display: grid;
    grid-template-areas:
      "title video"
      "abilities video";
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;

    h6 {
      right: -0.15em;
      transform: rotate(90deg) translateX(100%);
      display: block;
      top: 80px;
      font-size: 14px;
      border-bottom: none;
      padding: 0;
      margin: 0;
      position: absolute;
      color: #8b978f;
      letter-spacing: 0.03em;

      .scamble-text {
        span {
          display: block;
          min-height: 1.15em;
          width: 115px;
        }
      }
    }
    .abilities-title {
      margin: 0;
      padding-right: calc(8.33333% + 2.5px);
      overflow: visible;
      position: relative;
      color: #0f1923;
      padding: 0.1em 0;
      font-family: "BlackHanSans-Regular", sans-serif;
      font-size: 60px;

      &::before {
        left: 40px;
        background-color: #8b978f;
        content: "";
        display: block;
        height: 3px;
        position: absolute;
        top: -15px;
        width: 3px;
        box-sizing: border-box;
      }

      span {
        width: 100%;
        display: inline-block;
        line-height: 0.94;
      }
    }
    .abilities-Container {
      grid-area: abilities;
      display: block;

      .abilities-List {
        padding-left: calc(16.66667% + 5px);
        margin: 60px 0;
        /* padding: 0 3%; */
        justify-content: flex-start;
        display: flex;
        position: relative;

        &::before {
          content: "";
          display: block;
          height: 1px;
          position: absolute;
          top: 50%;
          box-sizing: border-box;
          width: 100vw;
          background: #8b978f;
          left: 0;
        }

        .ability-icon-wrapper {
          margin-right: 5%;
          border-color: #0f1923;
          cursor: pointer;
          background: #ece8e1;
          border: 1px solid #bdbcb7;
          overflow: hidden;
          position: relative;
          align-items: center;
          display: flex;
          flex-shrink: 0;
          height: 72px;
          width: 72px;
          justify-content: center;

          &::after {
            left: -10%;
            content: "";
            display: block;
            height: 100%;
            opacity: 1;
            position: absolute;
            top: 0;
            width: 120%;
            box-sizing: border-box;
            background-color: #ff4655;
            transform: translateX(-100%) skew(-10deg);
            transition: 0.2s ease-out;
          }

          .ability-icon {
            opacity: 1;
            z-index: 1;
            backface-visibility: hidden;
            height: 43px;
            pointer-events: none;
            width: 43px;
            transform: scale(1);
            transition: 0.2s ease-out;
            filter: invert(40%) sepia(0%) saturate(1555%) hue-rotate(193deg) brightness(108%) contrast(98%);
          }
          &:hover {
            &::after {
              transform: translateX(0);
              transition: 0.2s ease-out;
            }
            .ability-icon {
              transform: scale(1.2);
              transition: 0.2s ease-out;
              filter: none;
            }
          }
        }
      }
      .ability-details-wrapper {
        padding-left: calc(16.66667% + 5px);
        padding-right: calc(33.33333% + 10px);
        min-height: 250px;
        display: block;
        box-sizing: border-box;

        .ability-title {
          transform: translate(0px, 0px);
          opacity: 1;
          margin-bottom: 20px;
          color: #383e3a;
          font-size: 21px;
          line-height: 1.25;
          font-weight: bold;
        }

        .ability-desc {
          transform: translate(0px, 0px);
          opacity: 1;
          position: relative;
          color: #768079;
          margin: 0;
          font-size: 16px;
          line-height: 1.5;
          display: block;

          &:before {
            content: "";
            display: block;
            height: 4px;
            position: absolute;
            top: 10px;
            width: 4px;
            background-color: #8b978f;
            left: -8%;
            box-sizing: border-box;
            color: #768079;
          }
        }
      }
    }
    .video-wrapper {
      padding: 0;
      align-self: start;
      max-width: 686px;
      position: relative;
      width: 48vw;
      grid-area: video;
      display: block;

      .detail-box {
        border-left: 0;
        right: calc(40% - 40px);
        border: 1px solid #8b978f;
        border-bottom: 0;
        margin-top: -40px;
        height: 40px;
        position: absolute;
        top: 0;
        width: 40px;
        display: block;

        &::before {
          transform: rotate(45deg);
          border-top: 1px solid #8b978f;
          content: "";
          display: block;
          height: 1px;
          position: absolute;
          top: 50%;
          width: 100%;
          box-sizing: border-box;
        }
        &::after {
          box-sizing: border-box;
          left: calc(50% - 6px);
          background-color: #0f1923;
          border: 4px solid #ece8e1;
          content: "";
          display: block;
          height: 12px;
          position: absolute;
          top: calc(50% - 6px);
          width: 12px;
        }
        .detail-line {
          background-color: #bdbcb7;
          bottom: 0;
          height: 300px;
          position: absolute;
          width: 1px;
          left: 0;
        }
      }
      .overview-video {
        position: relative;
        width: 100%;
        display: block;

        .video-container {
          position: relative;
          box-sizing: border-box;
          display: block;

          .video {
            background-color: #0f1923;
            position: relative;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            display: block;

            &::before {
              padding-top: 56.25%;
              content: "";
              display: block;
            }

            video {
              position: absolute;
              top: 0;
              height: 100%;
              width: 100%;
              object-fit: cover;
              object-position: center;
            }
          }
        }
        .black-border {
          margin-left: 5%;
          background-color: #8b978f;
          height: 26px;
          width: 95%;
          display: block;
        }
      }
    }
  }
`;
export const DownloadContainer = styled.section`
  padding: 100px 7.3%;
  height: auto;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  display: block;
  box-sizing: border-box;

  &::after {
    border-left: 1px solid hsla(38, 22%, 90%, 0.5);
    border-right: 1px solid hsla(38, 22%, 90%, 0.4);
    left: calc(50% - 615px);
    max-width: 1230px;
    width: 85.4%;
    content: "";
    display: block;
    height: 100%;
    pointer-events: none;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  .download-video {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: block;
    box-sizing: border-box;

    video {
      object-position: 46% center;
      height: 100%;
      width: 100%;
      object-fit: cover;
      box-sizing: border-box;
    }

    &::after {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.2) 40%, transparent 70%);
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
  .download-section-wrapper {
    padding: 50px 0;
    margin: 0 auto;
    height: auto;
    max-width: 1230px;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    display: block;

    &:after {
      left: calc(8.33333% + 2.5px);
      border-top: 1px solid hsla(38, 22%, 90%, 0.4);
      content: "";
      display: block;
      position: absolute;
      top: 0;
      width: calc(58.33333% - 12.5px);
      box-sizing: border-box;
    }

    .download-title {
      margin-left: calc(8.33333% + 2.5px);
      margin-top: 10px;
      padding: 0.13em 0;
      color: #ece8e1;
      width: 640px;
      line-height: 0.9;

      span {
        width: 100%;
        font-family: "BlackHanSans-Regular", sans-serif;
        display: inline-block;
        line-height: 0.9;
        font-size: 156px;
        text-transform: uppercase;
      }
    }
    .download-button-wrapper {
      margin-left: calc(8.33333% + 2.5px);
      margin-top: 60px;
      padding: 0;
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
      width: calc(91.66667% - 2.5px);
      box-sizing: border-box;

      .download-btn {
        margin: 42.5px 0 60px;
        color: #ece8e1;
        border: 0;
        cursor: pointer;
        padding: 7px;
        text-align: center;
        background: none;
        min-width: 260px;
        position: relative;
        width: auto;
        bottom: 27.5px;
        font-size: 14px;
        display: block;
        box-sizing: border-box;

        &::before {
          content: "";
          display: block;
          height: calc(50% - 4px);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          border: 1px solid hsla(38, 22%, 90%, 0.5);
          border-bottom: 0;
          box-sizing: border-box;
        }

        &::after {
          content: "";
          display: block;
          height: calc(50% - 4px);
          position: absolute;
          width: 100%;
          bottom: 0;
          left: 0;
          border: 1px solid hsla(38, 22%, 90%, 0.5);
          border-top: 0;
          box-sizing: border-box;
        }

        .btn-style {
          font-weight: 700;
          overflow: hidden;
          position: relative;

          &::before {
            content: "";
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: calc(100% - 2px);
            background-color: #ff4655;
            box-sizing: border-box;
          }

          &::after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: calc(100% - 2px);
            height: 2px;
            background-color: #ff4655;
            box-sizing: border-box;
          }

          .hover-mask {
            box-sizing: border-box;
            content: "";
            display: block;
            height: 100%;
            position: absolute;
            left: -5%;
            top: 0;
            width: 120%;
            z-index: 1;
            cursor: pointer;
            transition-duration: 0.3s, 0.3s;
            transition-timing-function: ease-out, ease-out;
            transition-delay: 0s, 0s;
            transition-property: transform, -webkit-transform;
            transform: translateX(-100%) skew(-10deg);
            background-color: #fff;
          }

          .btn-text {
            background-color: transparent;
            cursor: pointer;
            padding: 19px 30px;
            text-align: center;
            display: block;
            position: relative;
            z-index: 1;
            box-sizing: border-box;

            &::after {
              bottom: 0;
              content: "";
              display: block;
              position: absolute;
              height: 4px;
              width: 4px;
              transition: background-color 0.2s ease-in;
              background-color: #0f1923;
              right: 0;
              box-sizing: border-box;
            }
          }

          &:hover {
            .hover-mask {
              left: -5%;
              transform: translateX(0%) skew(-10deg);
              background-color: #fff;
            }
            .btn-text {
              color: #000;
            }
          }
        }
      }
    }
  }
`;