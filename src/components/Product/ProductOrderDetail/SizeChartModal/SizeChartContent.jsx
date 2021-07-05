import React from "react";
import useStyles from "./chartContentStyles";
import PhongDiv from "../../../../General/PhongDiv";
import TableSize from "./TableSize/TableSize";
import Media from "react-media";
import photo from "../../../../Assets/photo.png";
const SizeChartContent = () => {
  const classes = useStyles();

  const steps = [
    {
      stepNum: 1,
      content:
        "Đứng lên một mảnh giấy với gót chân chạm nhẹ vào bức tường phía sau.",
    },
    {
      stepNum: 2,
      content:
        "Đánh dấu đỉnh đầu của ngón chân dài nhất lên giấy (nên nhờ một người bạn giúp đỡ) và đo khoảng cách từ tường đến điểm đánh dấu.",
    },
    {
      stepNum: 3,
      content:
        "Làm tương tự với bàn chân còn lại và so sánh số đo với biểu đồ kích cỡ của chúng tôi để chọn đúng kích cỡ.",
    },
  ];

  return (
    <Media
      queries={{
        small: "(max-width: 700px)",
        medium: "(min-width: 701px) and (max-width: 967px)",
        large: "(min-width: 968px)",
      }}
    >
      {(matches) => (
        <>
          <PhongDiv
            backgroundcolor="white"
            width={matches.small ? "100%" : "50%"}
            padding="10px"
            className={classes.paper}
          >
            <div className={classes.tableSize}>
              <h1 className={classes.title}>kích cỡ giày dép nam nữ</h1>
              <TableSize />
              <p>Kéo theo chiều ngang để xem chi tiết.</p>
            </div>
            <div className={classes.tips}>
              <h2>BẠN GẦN VỚI HAI KÍCH CỠ?</h2>
              <div>
                <p>Để bó sát, lấy nhỏ hơn một cỡ.</p>
                <p>Để rộng thoải mái, lấy rộng hơn một cỡ.</p>
              </div>
            </div>
            <div>
              <h2 style={{ textTransform: "uppercase" }}>Cách đo</h2>
              <p>
                Làm theo những bước sau để chọn đúng kích cỡ. Để tìm số đo chuẩn
                nhất, hãy đo bàn chân bạn vào cuối ngày.
              </p>
              <PhongDiv
                className={classes.stepContent}
                display="flex"
                flexdirection={matches.small ? "column-reverse" : "row"}
              >
                <div className={classes.steps}>
                  <ul>
                    {steps.map((step) => (
                      <li>
                        <span style={{ fontWeight: "bold" }}>
                          {step.stepNum}.
                        </span>
                        <span>{step.content}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img style={{ width: "100%" }} src={photo} alt="" />
                </div>
              </PhongDiv>
            </div>
            <div>
              <h2>KHÔNG ĐÚNG KÍCH CỠ HOẶC MÀU SẮC?</h2>
              <p>
                Không vấn đề gì, chúng tôi chấp nhận trả hàng trong vòng 30
                ngày.
              </p>
            </div>
          </PhongDiv>
        </>
      )}
    </Media>
  );
};

export default SizeChartContent;
