const axios = require("axios");

let attemptCounter = 0; // 시도 횟수 추적

const fetchData = async (url, retries, delay) => {
	try {
		attemptCounter++;
		if(attemptCounter <= 2) {
			throw new Error("Simulated network failure");
		}
		
		// api 요청
		const response = await axios.get(url);
		console.log(`Success: ${response.status}`);	
		return response.data; // 성공 시 데이터 반환
	} catch(error) {
			console.log(
				`Attempt ${attemptCounter} failed with error: ${error.message}. Waiting ${delay} ms before retrying.`
			);
			if(retries > 0) { // 시도 횟수가 남아 있으면?
				// 실패 시 setTimeout 으로 delay 만큼 기다리기.
				await new Promise((resolve) => setTimeout(resolve, delay));
				// 시도 가능 횟수를 줄이고, delay 시간을 늘려서 요청 재시도
				return fetchData(url, retries - 1, delay * 2);
			} else { // 재시도 횟수를 모두 사용했을 때 실패했음을 알린다.
				throw new Error("All retries failed");
			}
		}
	}
};

const url = "API_URL";
fetchData(url, 3, 1000).catch(console.error);
