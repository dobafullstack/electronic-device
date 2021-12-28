import * as crypto from "crypto";

export default function momo(requestId, amount, orderId) {
    const partnerCode = "MOMOKJE920211226";
    const accessKey = "jbS6l9h5d7MAaXeG";
    const returnUrl = "http://localhost:3001/cart";
    const notifyUrl = "http://localhost:4000/momo/notifyUrl";
    const requestType = "captureMoMoWallet";
    const extraData = "email=dobadov3@gmail.com";
    const orderInfo = "Create By Doba and VinhKy";
    const secretKey = "TvFbxe33r2rcpb07sFyycmNxmMN8UwKk";

    const msg = `partnerCode=${partnerCode}&accessKey=${accessKey}&requestId=${requestId}&amount=${amount}&orderId=${orderId}&orderInfo=${orderInfo}&returnUrl=${returnUrl}&notifyUrl=${notifyUrl}&extraData=${extraData}`;

    const signature = crypto
        .createHmac("sha256", secretKey)
        .update(msg)
        .digest("hex");

    return {
        partnerCode,
        accessKey,
        requestId,
        amount,
        orderId,
        returnUrl,
        notifyUrl,
        requestType,
        signature,
        extraData,
        orderInfo,
    };
}
