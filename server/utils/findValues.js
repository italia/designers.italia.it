const findValuesHelper = (obj, key, list) => {
  if (!obj) return list

  let originalList = list;

  if (obj instanceof Array) {
    for (const i in obj) {
      if (Object.hasOwnProperty.call(obj, i)) {
        originalList = list.concat(findValuesHelper(obj[i], key, []));
      }
    }

    return originalList;
  }

  if (obj[key]) list.push(obj[key])

  if ((typeof obj === "object") && (obj !== null)) {
    const children = Object.keys(obj)
    if (children.length > 0) {
      for (const element of children) {
        originalList = list.concat(findValuesHelper(obj[element], key, []))
      }
    }
  }

  return originalList;
}

exports.findValues = (obj, key) => findValuesHelper(obj, key, [])
