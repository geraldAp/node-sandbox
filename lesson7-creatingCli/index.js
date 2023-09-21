#!/usr/bin/env node

// const yargs = require('yargs')
// const {argv} = yargs(process.argv)
const inquirer = require('inquirer')
// the cli option
// we will also install a package called yargs 
// console.log(process.argv);

const printFiveMoves = async (pokemonName) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokeData = await res.json();
  const moves = pokeData.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};


// passing arguments to a cli tool basically we want the user to pass in the pokemon name when passing in the cli command so in order to do that we pass a cli option


/* to convert this package into a cli we do what is at the top #blablabla the above is called a shibang which tells the os what interpreter what to use. and second in package.json we add a new field called bin all the field does is makes use treat the package as an executable file which can be installed into a path variable. */

// adding interactivity to our cli 
// we ill need this package  called inquirer
// creating a prompt module
const prompt= inquirer.createPromptModule()

prompt([
  {
    type: 'input',
    name: 'pokemon',
    message: 'What pokemon would you like to know about?'
  
  }
]).then(answer => {
  const pokemon = answer.pokemon
  printFiveMoves(pokemon);
})

