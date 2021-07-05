export default {
  install(Vue, options) {
    Vue.prototype.$eventBus = new Vue();
    Vue.prototype.$cloneObj = function (object) {
      return JSON.parse(JSON.stringify(object));
    }
    Vue.prototype.$scrollTo = function (id = false, offset = 0, refs = false, ref = false) {

      let target = false;
      if (id) {
        target = document.querySelector(id);
        if (!target) {
          return false;
        }
      }
      if (refs && ref) {
        target = refs[ref];
        return false;
      }
      let top = target.offsetTop;
      if (!top && refs && ref) {
        top = refs[ref][0].offsetTop;
      }
      if (!top) {
        return false;
      }
      window.scrollTo({
        top: top + offset,
        behavior: "smooth",
      });
      return true;
    };
    Vue.prototype.$scrollToTop = function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    Vue.prototype.$switchArray = function (i, arr, key_name) {
      for (let key in arr) {
        if (i != key) {
          Vue.set(arr[key], key_name, false);
        }
      }
      Vue.set(arr[i], key_name, true);
    };
    Vue.prototype.$switchActive = function (i, arr) {
      for (let key in arr) {
        if (i != key) {
          Vue.set(arr[key], 'active', false);
        }
      }
      Vue.set(arr[i], 'active', true);
    };
    Vue.prototype.$toggleArray = function (i, arr, key_name) {
      for (let key in arr) {
        if (i != key) {
          Vue.set(arr[key], key_name, false);
        }
      }
      if (arr[i][key_name]) {
        Vue.set(arr[i], key_name, false);
      } else {
        Vue.set(arr[i], key_name, true);
      }
    };
    Vue.prototype.$setUrlParameter = function (name, value) {
      const url = new URL(document.location.href);
      const params = new URLSearchParams(url.search.slice(1));

      params.set(name, value);
      const params_string = url.pathname + '?' + params.toString();

      history.pushState(null, null, params_string);
      window.dispatchEvent(new Event('popstate'));
    };
    Vue.prototype.$appendUrlParameter = function (name, value) {
      const url = new URL(document.location.href);
      const params = new URLSearchParams(url.search.slice(1));

      params.append(name, value);
    };
    Vue.prototype.$getUrlParameter = function (name) {
      const params = new URLSearchParams(document.location.search.substring(1));
      const param = params.get(name);
      return param;
    };
    Vue.prototype.$delUrlParameter = function (name) {
      const url = new URL(document.location.href);
      const params = new URLSearchParams(url.search.slice(1));

      params.delete(name);
      const params_string = url.pathname + '?' + params.toString();

      history.pushState(null, null, params_string);
      window.dispatchEvent(new Event('popstate'));
    };
    Vue.prototype.$getRandom = function (arr = []) {
      return arr[Math.floor((Math.random() * arr.length))];
    };
    Vue.prototype.$validate = function (form) {

      let valid = true;

      for (let key in form) {
        if (typeof form[key].error === "undefined") {
          continue;
        }
        if (typeof form[key].value === "string") {
          form[key].value = form[key].value.trim();
        } else if (form[key].value === null) {
          form[key].value = '';
        } else {
          continue;
        }
        let error = "";
        switch (key) {
          case "name":
            if (form[key].value.length < 1) {
              error = "Заполните это поле";
            }
            break;
          case "surname":
            if (form[key].value.length < 1) {
              error = "Заполните это поле";
            }
            break;
          case "city":
            if (form[key].value.length < 1) {
              error = "Заполните это поле";
            }
            break;
          case "password":
            if (form[key].value.length < 1) {
              error = "Неверно введен пароль";
            }
            break;
          case "phone":
            if (form[key].value.length < 18) {
              error = "Неверно введен телефон";
            }
            break;
          case "email":
            if (
              !form[key].value.includes("@") ||
              !form[key].value.includes(".")
            ) {
              error = "Вы указали неверный email";
            }
            break;
          case "message":
          case "text":
            if (form[key].value.length < 10) {
              error = "Минимальное количество символов - 10";
            }
            break;
          case "accept":
            if (!form[key].value) {
              error = "error";
            }
            break;
          default:
            if (form[key].value.length < 1) {
              error = "Заполните это поле";
            }
            break;
        }
        if (error !== "") {
          valid = false;
        }
        form[key].error = error;
      }
      setTimeout(() => {
        for (let key in form) {
          if (typeof form[key].error !== "undefined") {
            form[key].error = "";
          }
        }
      }, 6000);
      return valid;
    };
  }
}
