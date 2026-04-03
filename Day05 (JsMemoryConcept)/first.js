/*Memory Concept in JS

    0.RAM is where a program is loaded and executed.
        -Within RAM:
            a.Stack is used for managing function calls and local variables.
                -small and fixed in size variable, are stored directly in the stack.
            b.Heap is used for dynamically allocated memory during runtime.
                -small and dynamic in size variable, are stored in heap, but there reference are stored in stack.

    1.Stack
        -The stack is used for managing primitive data types (like numbers, strings, and booleans) and function execution contexts.
        -When the function returns, its stack frame is removed.
        -In JavaScript, primitive data types are immutable because their values cannot be modify after they are created. 
        -If you try to modify a primitive value, a new value is created instead of changing the original one.
          bcz-let x=10;  4Byte
              x="x ka value ko update krke string v daal skte hai";  4Byte se boht jayda space lega isliye isko new mem denge 

    2.Heap
        The heap is a large memory region used for storing objects and reference types.
        Objects, arrays, and functions are stored in the heap because their sizes are dynamic(data stored in heap are mutable bcz of this) and unpredictable.
        Variables in the heap are accessed via references which is stroed in stack.
        

*/

// Primitive data type vs Non Primitive data type
// Primitive data type: Immutable
// Non Primitive data type: Mutable
let a = 10;
a="satyam and abhi is frnd";//aisa lg raha hai a ko modify kr pa rahe hai ,but a ko new memory mila hai jisme ye string gaya 
console.log(a);

a=20;
let b = a; //primitive data type are pass by value.     //non-primitive data type are pass by reference.
b = 30;     //b me val 30 gaya pr new mem space mila hai b ko
console.log(b);//b ka value update krne se a ka val update nhi hoga kyuki primitive are pass by value.
console.log(a);

// Object example:
let obj1 = {
    id:20,
    naming: "rohit"
}
obj1=6505 //obj1 here store the address(reference) of heap mem jaha pe isse obj ko mem mila hai
//since obj are stored in heap but uska reference stack me rhta hai 
//isliye obj2 me obj1 ka address gaya jo ki point kr raha hai same obj ko jo heap me rakha hai
//isliye agar obj2 me value change krege to obj1 me v o vhnage reflect hoga kyu ki dono same hi object ko point kr raha hai
let obj2 = obj1;
obj2.id = 30;
console.log(obj1);
console.log(obj2);

const obj3={
    id:20,
    naming: "rohit"
}
obj3.id=100;//yaha error nhi dega //obj3 me address hai o thodi change hua hai
//obj3=obj1;//error bcz const obj3(ka address update ho jayega isse) ka val update kr rahe hai




