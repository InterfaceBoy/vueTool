/*
 * @Author: 何元鹏
 * @Date: 2019-10-16 16:06:12
 * @LastEditors: 何元鹏
 * @LastEditTime: 2019-10-16 16:06:12
 * @Description: file content
 */
import iview from "view-design";
import { typeOf } from "./base";
const noop = () => {};

const notice = type => message => {
  if (!message) {
    return;
  }

  const validType = ["array", "string", "object"];
  const msgType = typeOf(message);

  if (!validType.includes(msgType)) {
    throw new Error(
      `expected message is string|array|object, but got a ${msgType}`
    );
  }

  const options = msgType === "object" ? message : { content: message };
  const {
    content,
    duration = 1.5,
    closable = false,
    onClose = noop,
    render
  } = options;

  if (!content && !render) {
    throw new Error("can not render empty content");
  }

  const renderContent =
    render ||
    function(h) {
      const contents = Array.isArray(content) ? content : [content];
      return h(
        "div",
        { style: "text-align:left" },
        contents.map(item => h("div", item))
      );
    };

  iview.Message[type]({
    duration,
    closable,
    onClose,
    render: renderContent
  });
};

const typeMap = ["success", "info", "warning", "error", "loading"];

const notices = {};

typeMap.forEach(type => {
  notices[type] = notice(type);
});

export default notices;
