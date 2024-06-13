export const loadPayPalScript = (callback) => {
  const existingScript = document.getElementById("paypal-sdk-script");
  if (!existingScript) {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=BAAs1adGrzv3c19ayHP_CeS2zoeK6CrQBgvtio_xdTwLr4065qB504sfmyFd4B5SfAybPA_0uluCWqpeOI&components=hosted-buttons&disable-funding=venmo&currency=NZD";
    script.id = "paypal-sdk-script";
    script.async = true;
    script.onload = () => {
      if (callback) callback();
    };
    document.body.appendChild(script);
  } else {
    if (callback) callback();
  }
};
