function doSome(){
    console.log("Hello");
}
function disc(){
    console.log("bye");
}
export default function Button() {
    return (
    <div>
        <button onClick={doSome}>Click me!</button>
        <p onMouseOver={disc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Consequuntur in nobis tenetur esse consectetur expedita cumque totam, 
             voluptates ipsa laborum quae ex delectus harum at pariatur? Praesentium saepe itaque voluptas.</p>
    </div>
    );
}