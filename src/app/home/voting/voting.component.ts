import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

export interface Character{
  id:number;
  name:string,
  category:string,
  description:string,
  upvotes:number,
  downvotes:number,
  votingDate:string,
  image:string
}

@Component({
  selector: 'voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  description="Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely.It's easy: You share your opinion, we analyze and put the data in a public report."
  visibilidadMensaje=true
  characters:Character[]=[
    {id:1,name:"Kanye West",category:"Entertainment",description:"Is Kanye West the best rapper of all time (thumbs up) or is he a nobody (thumbs down)",upvotes:64,downvotes:36,votingDate:"",image:"kanye.jpg"},
    {id:2,name:"Mark Zuckerberg",category:"Business",description:"Is Mark Zuckerberg a tecnological genius (thumbs up) or is he a disgrace to mankind.(thumbs down)",upvotes:36,downvotes:64,votingDate:"",image:"zuckerberg.jpg"},
    {id:3,name:"Cristina Fernández",category:"Politics",description:"Is Cristina a role model to the latin american woman(thumbs up) or is she a corrupted politician.(thumbs down)",upvotes:36,downvotes:64,votingDate:"",image:"kirchner.jpg"},
    {id:4,name:"Malala Yousafzai",category:"Entertainment",description:"Is Malala worth of the Nobel Prize (thumbs up), or is she just some random girl trying to get attention (thumbs down)",upvotes:64,downvotes:36,votingDate:"",image:"malala.jpg"}
  ]

  formCharacters:FormGroup

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.createForm()
    this.fillForm()

  }

  vote(value, index){

    console.log(value);
    console.log(index);
    
    let currentUpvoteValue=this.formArrayCharacters.at(index).get('upvotes').value
    let currentDownvoteValue=this.formArrayCharacters.at(index).get('downvotes').value
    let currentTotalVotes=this.formArrayCharacters.at(index).get('totalVotes').value

    if(value=='true'){
      this.formArrayCharacters.at(index).get('upvotes').setValue(currentUpvoteValue+1)
      this.formArrayCharacters.at(index).get('executedVote').setValue(true)
      this.formArrayCharacters.at(index).get('totalVotes').setValue(currentTotalVotes+1)
      localStorage.setItem("characters",JSON.stringify(this.formCharacters.value))
    }else if (value=='false'){
      this.formArrayCharacters.at(index).get('downvotes').setValue(currentDownvoteValue+1)
      this.formArrayCharacters.at(index).get('executedVote').setValue(true)
      this.formArrayCharacters.at(index).get('totalVotes').setValue(currentTotalVotes+1)
      localStorage.setItem("characters",JSON.stringify(this.formCharacters.value))
    }
  }

  restartVote(index){
    this.formArrayCharacters.at(index).get('executedVote').setValue(false)
  }

  createForm(){
    this.formCharacters=this.fb.group({
      characters:this.fb.array([])
    })
  }
  get formArrayCharacters(){
    return this.formCharacters.controls.characters as FormArray
  }


  fillForm(){

    if(localStorage.getItem("characters")===null){
    for(let item of this.characters){
      var formCharacter:FormGroup=this.fb.group({
        name:[item.name],
        upvotes:[item.upvotes],
        downvotes:[item.downvotes],
        vote:[],
        executedVote:[false],
        totalVotes:[item.upvotes+item.downvotes]
      })
      this.formArrayCharacters.push(formCharacter)
      localStorage.setItem("characters",JSON.stringify(this.formCharacters.value))
      }
    } else if(localStorage.hasOwnProperty('characters')){

      let object_characters=JSON.parse(localStorage.getItem("characters"))

      for(let item of object_characters.characters){
        var formCharacter:FormGroup=this.fb.group({
          name:[item.name],
          upvotes:[item.upvotes],
          downvotes:[item.downvotes],
          vote:[],
          executedVote:[false],
          totalVotes:[item.upvotes+item.downvotes]
        })
        this.formArrayCharacters.push(formCharacter)
        localStorage.setItem("characters",JSON.stringify(this.formCharacters.value))
      }
    }
  }
}
