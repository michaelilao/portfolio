import { google } from "googleapis";

export const getGoogleDriveData = async () => {
	const auth = new google.auth.GoogleAuth({
		keyFile: process.cwd() + "/creds.json",
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
		console.error("Error fetching files:", error.message);
		return null;
	}
};
