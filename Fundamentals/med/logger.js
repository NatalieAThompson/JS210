function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
On line 10 the debugIt function is invoked. The `debugIt` function is defined on lines 1-8.
The function declaration on lines 3-5 is hoisted to the top of the function.
The local `const` variable `status` is declared and initialized to the string literal `'debugging'`.
On line 7 the `logger` function is invoked.
The `logger` function binds to the lexical enviroment and has access to variables there. Logger doesn't
have a declaration for `status` so the function looks in the next outer scope and finds the declaration.
*/