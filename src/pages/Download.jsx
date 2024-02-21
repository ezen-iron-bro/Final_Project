import { DownloadContainer } from "../styled/valorantStyled";
const Download = () => {
  const onDownload = () => {
    alert("서버 점검중입니다.");
  };
  return (
    <DownloadContainer>
      <div className="download-video">
        <video preload="true" muted loop playsInline autoPlay data-testid="agent:video" height="100%" width="100%">
          <source src="/images/download-background.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="download-section-wrapper">
        <h2 className="download-title">
          <span>
            게임 <br />
            다운로드
          </span>
        </h2>
        <div className="download-button-wrapper">
          <button className="download-btn">
            <div className="btn-style">
              <span className="hover-mask"></span>
              <span className="btn-text" onClick={onDownload}>
                다운로드
              </span>
            </div>
          </button>
        </div>
      </div>
    </DownloadContainer>
  );
};

export default Download;
