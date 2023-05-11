import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-control',
  templateUrl: './blog-control.component.html',
  styleUrls: ['./blog-control.component.css'],
})
export class BlogControlComponent {

  newArticleTitle='';
  newArticleContent='';
 @ViewChild('articleContentInput',{static:true}) articleContentInput:ElementRef
  // ? Phase 1 : on émét des events qui contiennent un objet par exemple
  // !On déclare les évènement et leur objet émis avec les propriétés typées
  //! Bonus on peut faire un alias pour le nom de l'event
  @Output('artCreated') articleCreated = new EventEmitter<{articleTitle:string, articleContent:string}>();
  @Output() brouillonCreated = new EventEmitter<{articleTitle:string, articleContent:string}>();

  // onAddArticle(){
  //   this.articleCreated.emit({
  //     articleTitle:this.newArticleTitle,
  //     articleContent:this.newArticleContent
  //   })
  // }

  onAddArticle(laRef,articleContentInput:HTMLInputElement){
    //! là on affiche tout le code de l'input html
    console.log(laRef);
    //! Comme c'est un input il a une propriété value
    console.log(laRef.value);
    
    this.articleCreated.emit({
      // articleTitle:this.newArticleTitle,
      articleTitle:laRef.value,
      articleContent:this.articleContentInput.nativeElement.value
    })
  }
  // onAddBrouillon(){
  //   this.brouillonCreated.emit({
  //     articleTitle:this.newArticleTitle,
  //     articleContent:this.newArticleContent
  //   })
  // }
  onAddBrouillon(laRef,articleContentInput:HTMLInputElement){
    console.log(articleContentInput);
    this.brouillonCreated.emit({
      articleTitle:laRef.value,
      articleContent:this.articleContentInput.nativeElement.value
    })
  }
}
