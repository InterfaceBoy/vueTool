// 导出pdf
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";

export default {
  methods: {
    getPdf: (el, pdfName) => {
      // 滚轮滑动造成的，主要是html2canvas是根据body进行截图，若内容高度高于body时，就会出现这样的问题
      // 解决方案：(在生成截图前，先把滚动条置顶)
      window.pageYoffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      return new Promise((resolve, reject) => {
        // 在点击保存图片时，此时要保存的资源较多，造成模块并没有完全加载完毕，就已经生成了截图。
        // 解决方案：(延迟)
        setTimeout(() => {
          // 这句挺重要
          html2Canvas(el, {
            scale: 4,
            dpi: 300,
            useCORS: true,
            allowTaint: true,
          })
            .then((canvas) => {
              const contentWidth = canvas.width;
              const contentHeight = canvas.height;
              const pageHeight = (contentWidth / 592.28) * 841.89;
              let leftHeight = contentHeight;
              let position = 0;
              const imgWidth = 595.28;
              const imgHeight = (592.28 / contentWidth) * contentHeight;
              const pageData = canvas.toDataURL("image/jpeg", 1.0);
              const PDF = new JsPDF("", "pt", "a4");
              if (leftHeight < pageHeight) {
                // 在pdf.addImage(pageData, 'JPEG', 左，上，宽度，高度)设置在pdf中显示；
                PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
                // pdf.addImage(pageData, 'JPEG', 20, 40, imgWidth, imgHeight);
              } else {
                // 分页
                while (leftHeight > 0) {
                  PDF.addImage(
                    pageData,
                    "JPEG",
                    0,
                    position,
                    imgWidth,
                    imgHeight
                  );
                  leftHeight -= pageHeight;
                  position -= 841.89;
                  // 避免添加空白页
                  if (leftHeight > 0) {
                    PDF.addPage();
                  }
                }
              }
              resolve({ PDF, name: pdfName });
            })
            .catch((e) => {
              reject(e);
            });
        }, 500);
      });
    },
  },
};

/* 

html2Canvas(this.$refs.printTemp, {
        backgroundColor: "#ffffff",
      }).then(function (canvas) {
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight;
        let pageData = canvas.toDataURL("image/jpeg", 1.0);
        let PDF = new JsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 841.89;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save("文件" + ".pdf");
      });

*/
