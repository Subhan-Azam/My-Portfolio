import "./headerBtn.css"

export default function HeaderBtn(props) {
  return (
    <div>
        <button className="HeaderBtn mb-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">{props.title}</button>
    </div>
  )
}
