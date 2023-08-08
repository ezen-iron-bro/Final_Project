import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

const Box1 = ({ handleNext }) => {
  const [isServiceChk, setIsServiceChk] = useState(false);
  const [isPersonalChk, setIsPersonalChk] = useState(false);
  const [isRelocationChk, setIsRelocationChk] = useState(false);
  return (
    <>
      <div className="signup-box-header">
        <h5>서비스 약관에 동의해 주세요.</h5>
      </div>
      <div className="signup-box-content">
        <ul>
          <li>
            <input type="checkbox" id="service-consent" checked={isServiceChk} />
            <label class="checkbox-label" htmlFor="service-consent" onClick={() => setIsServiceChk(!isServiceChk)}>
              <span class="checkbox-text">
                <strong>발로란트 서비스 약관</strong>에 동의 (필수)
              </span>
              <span class="link-wrapper">
                <button class="consent-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="8" fill="#F2F2F2"></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.12513 8.26745L9.12513 6.26745L17.66 6.26745L17.66 6.2731L17.6606 6.2731L17.6606 14.803L15.6606 14.803L15.6606 9.73946L8.00376 17.3963L6.58955 15.9821L14.3042 8.26745L9.12513 8.26745Z"
                    ></path>
                  </svg>
                </button>
              </span>
            </label>
          </li>
          <li>
            <input type="checkbox" id="personal-info-consent" checked={isPersonalChk} />
            <label
              class="checkbox-label"
              htmlFor="personal-info-consent"
              onClick={() => setIsPersonalChk(!isPersonalChk)}
            >
              <span class="checkbox-text">
                <strong>개인정보 수집 및 이용</strong>에 동의 (필수)
              </span>
              <span class="link-wrapper">
                <button class="consent-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="8" fill="#F2F2F2"></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.12513 8.26745L9.12513 6.26745L17.66 6.26745L17.66 6.2731L17.6606 6.2731L17.6606 14.803L15.6606 14.803L15.6606 9.73946L8.00376 17.3963L6.58955 15.9821L14.3042 8.26745L9.12513 8.26745Z"
                    ></path>
                  </svg>
                </button>
              </span>
            </label>
          </li>
          <li>
            <input type="checkbox" id="overseas-relocation-consent" checked={isRelocationChk} />
            <label
              class="checkbox-label"
              htmlFor="overseas-relocation-consent"
              onClick={() => setIsRelocationChk(!isRelocationChk)}
            >
              <span class="checkbox-text">
                <strong>개인정보 국외 이전</strong>에 동의 (필수)
              </span>
              <span class="link-wrapper">
                <button class="consent-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="8" fill="#F2F2F2"></rect>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.12513 8.26745L9.12513 6.26745L17.66 6.26745L17.66 6.2731L17.6606 6.2731L17.6606 14.803L15.6606 14.803L15.6606 9.73946L8.00376 17.3963L6.58955 15.9821L14.3042 8.26745L9.12513 8.26745Z"
                    ></path>
                  </svg>
                </button>
              </span>
            </label>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className={isServiceChk && isPersonalChk && isRelocationChk ? "on" : ""}
        onClick={() => {
          if (isServiceChk && isPersonalChk && isRelocationChk) {
            handleNext();
          }
        }}
      >
        <span>
          <FiArrowRight />
        </span>
      </button>
    </>
  );
};

export default Box1;
