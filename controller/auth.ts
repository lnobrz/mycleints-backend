import { Request, Response, NextFunction } from "express";

exports.requestToken = (req: Request, res: Response, next: NextFunction) => {
  res
    .status(300)
    .redirect(
      "https://marketplace.gohighlevel.com/oauth/chooselocation?response_type=code&redirect_uri=http://localhost:8080/get-token&client_id=client_id&scope=users.readonly"
    );
};

exports.getToken = async (req: Request, res: Response, next: NextFunction) => {
  const code = req.query.code;

  const url = "https://services.leadconnectorhq.com/oauth/token";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      client_id: "",
      client_secret: "",
      grant_type: "authorization_code",
      code: `${code}`,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res
      .status(300)
      .redirect(
        `http://localhost:5173/auth?accessToken=${data.access_token}&locationId=${data.locationId}&refreshToken=${data.refresh_token}`
      );
  } catch (error) {
    res.status(300).redirect(`http://localhost:5173/auth?error=${error}`);
  }
};

exports.refreshToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const refreshToken = req.query.refreshToken;
  const url = "https://services.leadconnectorhq.com/oauth/token";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    body: new URLSearchParams({
      client_id: "",
      client_secret: "",
      grant_type: "refresh_token",
      refresh_token: `${refreshToken}`,
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data.error) {
      res.status(400).json({ success: false, error: data.error_description });
    } else {
      res.status(200).json({
        success: true,
        accessToken: data.access_token,
        locationId: data.locationId,
        refreshToken: data.refresh_token,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
