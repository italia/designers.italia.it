const findValuesHelper = (obj, key, list) => {
  if (!obj) return list
  if (obj instanceof Array) {
    for (var i in obj) {
      list = list.concat(findValuesHelper(obj[i], key, []))
    }
    return list
  }
  if (obj[key]) list.push(obj[key])

  if ((typeof obj === "object") && (obj !== null)) {
    const children = Object.keys(obj)
    if (children.length > 0) {
      for (i = 0; i < children.length; i++) {
        list = list.concat(findValuesHelper(obj[children[i]], key, []))
      }
    }
  }
  return list
}

exports.findValues = (obj, key) => findValuesHelper(obj, key, [])
