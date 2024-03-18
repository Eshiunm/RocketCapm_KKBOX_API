// 定義 API 的網址和參數
const apiUrl = "https://api.kkbox.com/v1.1/search";
let queryString = "post malone";
const type = "track";
const territory = "TW";
const token = "Bearer YjTF7N-C-sgW6Ah4-lru7A==";

const searchForm = document.querySelector("#searchForm");

searchForm.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    const input = searchForm.querySelector("#search");
    queryString = input.value;
    getSearchData();
  }
});

// 渲染表格資料
function renderData(data) {
  const songList = document.querySelector("#song-list");
  let str = "";
  for (let i = 0; i < data.length; i++) {
    str += `<li class="w-1/3 flex items-center gap-3 py-3 px-3">
              <img
                class="w-[60px] h-[60px]"
                src="${data[i].album.images[0].url}"
                alt="縮圖"
              />
              <div>
                <h3>${data[i].name}</h3>
                <span>${data[i].album.artist.name} - ${data[i].album.name}</span>
              </div>
            </li>`;
  }
  songList.innerHTML = str;
}

// Get Search Data
function getSearchData() {
  // 使用 Axios 發送 GET 請求
  axios
    .get(apiUrl, {
      params: {
        q: queryString,
        type: type,
        territory: territory,
      },
      headers: {
        Authorization: token,
      },
    })
    .then(response => {
      // 請求成功，處理回傳的資料
      renderData(response.data.tracks.data);
    })
    .catch(error => {
      // 請求失敗，處理錯誤
      console.error("發生錯誤：", error);
    });
}

function init() {
  getSearchData();
}

init();
