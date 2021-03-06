var MailTo = {
  launch: function (c, e) {
    if (!c) throw new Error("No element has been defined");
    if (!e) throw new Error("No callback has been defined");
    document.getElementById(c).addEventListener("click", function (c) {
      e();
    });
  },
  open: function (c, e) {
    if (!c)
      throw new Error("Please define an email address before launching MailTo");
    if (e) {
      var o = "";
      (o = Array.isArray(c) ? "mailto:" + c.join(",") : "mailto:" + c),
        e.subject && (o += "?subject=" + encodeURI(e.subject)),
        e.body && (o += "&body=" + encodeURI(e.body)),
        e.cc &&
          (Array.isArray(e.cc)
            ? (o += "&cc=" + encodeURI(e.cc.join(",")))
            : (o += "&cc=" + encodeURI(e.cc))),
        e.bcc &&
          (Array.isArray(e.bcc)
            ? (o += "&bcc=" + encodeURI(e.bcc.join(",")))
            : (o += "&bcc=" + encodeURI(e.bcc))),
        (window.location.href = o);
    } else
      Array.isArray(c)
        ? (window.location.href = "mailto:" + c.join(","))
        : (window.location.href = "mailto:" + c);
  },
  link: function (c, e) {
    if (!c)
      throw new Error("Please define an email address before launching MailTo");
    if (e) {
      var o = "";
      return (
        (o = Array.isArray(c) ? "mailto:" + c.join(",") : "mailto:" + c),
        e.subject && (o += "?subject=" + encodeURI(e.subject)),
        e.body && (o += "&body=" + encodeURI(e.body)),
        e.cc &&
          (Array.isArray(e.cc)
            ? (o += "&cc=" + encodeURI(e.cc.join(",")))
            : (o += "&cc=" + encodeURI(e.cc))),
        e.bcc &&
          (Array.isArray(e.bcc)
            ? (o += "&bcc=" + encodeURI(e.bcc.join(",")))
            : (o += "&bcc=" + encodeURI(e.bcc))),
        o
      );
    }
    Array.isArray(c)
      ? (window.location.href = "mailto:" + c.join(","))
      : (window.location.href = "mailto:" + c);
  },
};
