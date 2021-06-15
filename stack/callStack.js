const func1 = () => {
  func2()
}

const func2 = () => {
  func3()
}

const func3 = () => { }

func1()

// debug
// 在CALL STACK中查看调用顺序