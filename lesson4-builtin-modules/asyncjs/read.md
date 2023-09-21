js on its own is a synchronous , blocking , single-threaded language 


<!-- Synchronous  -->
1) in a case of two codes it executes from top to down with only one line  executing at any give time 
eg
<!-- 
function a(){
    console.log('a)
}
function b(){
    console.log('b)
}
a()
b()
 -->
 a will be logged before b

<!-- Blocking -->
It is blocking because of it's synchronous nature. no matter how long the previous process takes to complete. The others won't start unless the the current one is completed 
lets say a is a heavy load code. Unless a is done executing b will not run
even if b will take a second

<!-- Single threaded  -->
A thread is a process that your js program can use to run a task at a time 

each thread can only do one task at a time 
js has only one thread 