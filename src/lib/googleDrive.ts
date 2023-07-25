import { google } from "googleapis";

export const getGoogleDriveData = async () => {
	const env = process.env.NODE_ENV;

	if (env === "development") {
		const fs = require("fs");
		const path = require("path");
		const dataDirectory = path.join(process.cwd(), "src/data/Michael_Ilao_Resume_2023.docx");
		const resume = fs.readFileSync(dataDirectory);
		return resume;
	}

	const credentials = {
		type: process.env.TYPE,
		project_id: process.env.PROJECT_ID,
		private_key_id: process.env.PRIVATE_KEY_ID,
		private_key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
		client_email: process.env.CLIENT_EMAIL,
		client_id: process.env.CLIENT_ID,
		auth_uri: process.env.AUTH_URI,
		token_uri: process.env.TOKEN_URI,
		auth_provider_x509_cert_url: process.env.AUTH_PROVIDER_X509_CERT_URL,
		client_x509_cert_url: process.env.CLIENT_X509_CERT_URL,
		universe_domain: process.env.UNIVERSE_DOMAIN,
	};

	const auth = new google.auth.GoogleAuth({
		credentials: credentials,
		scopes: ["https://www.googleapis.com/auth/drive"],
	});
	// allows you to use drive API methods e.g. listing files, creating files.
	const drive = google.drive({ version: "v3", auth });
	try {
		const res = await drive.files.list();
		const files = res.data.files;
		const resume = files?.find((file) => file?.name?.includes("Michael_Ilao_Resume"));
		if (!(resume && resume.id)) {
			return null;
		}
		const getResumeData = await drive.files.get(
			{
				fileId: resume.id,
				alt: "media",
			},
			{
				responseType: "arraybuffer",
			}
		);
		const buffer: any = getResumeData.data;
		return buffer;
	} catch (error: any) {
		console.log(error);
		return null;
	}
};
