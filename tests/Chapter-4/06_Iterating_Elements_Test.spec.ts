//Import playwright module
import {test,expect} from '@playwright/test'
//write a test
test("Iterating matching elements in playwright",async({page})=>
{

//Go to URL

  await page.goto('https://github.com/BakkappaN/');
 const repositoryLinks= await page.$$('.repo');
 //for of loop
 for(const repositoryLink of repositoryLinks){
    const Text=await repositoryLink.textContent();
    console.log(`Text from 1st loop:${Text}`);
 }
 //for loop
 for(let index=0; index<repositoryLinks.length; index++){
     const Text=await repositoryLinks[index].textContent();
     console.log(`Text from 2nd loop:${Text}`);
 }
 //for loop +nth() method
 const repositoryLinks2= await page.locator('.repo');
 const count=await repositoryLinks2.count();
 for(let index=0;index<count;index++){
    const Text=await repositoryLinks2.nth(index).textContent();
     console.log(`Text from 3rd loop:${Text}`);

 }

});