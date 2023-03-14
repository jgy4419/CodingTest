enum StatusCode {
	InternalServerError = 500,
	NotFound = 404,
	Ok = 200,
}
StatusCode.InternalServerError; // 500

let statusCode: StatusCode;

statusCode = StatusCode.Ok; // ok
statusCode = -1; // ok

