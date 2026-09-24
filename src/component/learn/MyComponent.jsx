import './style.css'
const MyComponent = () => {
  // const hoidanit = "eric"; //string
  // const hoidanit = 23 // number
  // const hoidanit = true // boolean
  // const hoidanit = undefined
  // const hoidanit = null
  const hoidanit = [1,2,3]
  // const hoidanit = {
  //   name: "hoidanit",
  //   age: 20
  // }
  return(
    <>
      <div> {JSON.stringify(hoidanit)} và hỏi dân IT update</div>
      <div>{console.log("Minh")}</div> 
      <div className = "child"
        style = {{borderRadius: "10px"}}
      >child</div>
    </>
  );
}
export default MyComponent;