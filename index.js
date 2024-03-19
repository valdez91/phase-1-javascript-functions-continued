function saturdayFun(Doings="roller-skate") {
    return `This Saturday, I want to ${Doings}!`
  }
  let mondayWork = function(Doings="go to the office") {
    return `This Monday, I will ${Doings}.`
  }
  let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }