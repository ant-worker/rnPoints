/**
 * client-server processing
 */

/**
 *
 */
function generalReq(obj) {
  return new Promise( (resolve, reject) => {

    // fetch(`https://api.github.com/search/repositories?q=api&page=2&per_page=3`).then(
    fetch(obj.url).then(
      response => {
				console.log(234)
				// const res = response;
        response.json().then((res) => {

          if (res.status === 0) {
            resolve(res.data);
          }else {
            reject({
              status: res.status,
              error: res.error,
              message: res.message
            });
          }
        });
      },
      error => {
				console.log(error)
        reject({
          error: error
        });
      }
    )
  })
}
function testGeneralReq(obj) {
  return new Promise( (resolve, reject) => {
    // fetch(`https://api.github.com/search/repositories?q=api&page=2&per_page=3`).then(
    fetch(obj.url).then(
      response => {
        response.json().then((res) => {
          if (res.status != 1) {
            resolve(res);
          }else {
            reject({
              status: res.status,
              error: res.error,
              message: res.message
            });
          }
        });
      },
      error => {
        reject({
          error: error
        });
      }
    )
  })
}

export const api = {
  login(params) {
    return generalReq({
      url: `http://127.0.0.1:2000/api/login`,
    });
  },
  logout(params) {
    return generalReq({
      url: `http://127.0.0.1:2000/api/logout`,
    });
  },
  getRacingList(params) {
    return testGeneralReq({
      url: `http://news-at.zhihu.com/api/4/theme/${params.id}`,
    });
  },
  getSeccode(params) {
    return generalReq({
      url: `http://127.0.0.1:2000/api/seccode`,
    });
  },
}
