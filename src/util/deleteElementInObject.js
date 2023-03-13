function del_entries(key, obj) {
    if (obj.hasOwnProperty(key)) {
      delete obj[key];
    }
    Object.values(obj).forEach(o=> del_entries(key, o))
  }
  
export default {del_entries}