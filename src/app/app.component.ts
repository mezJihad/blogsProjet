import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blogsProjet';

  blogs = [
    {
      titre : '1er blog',
      contenu : 'contenu 1er blog agggdgg dggsgds gdggsgd gdggsg gggdgs ggdsgsgg gsggdey gdggsg dsggdgdg gdsgggds dsggg',
      loveIts : 10,
      dateCreation : new Date(2018,5,19,19,50)
    },
    {
      titre : '2ème blog',
      contenu : 'contenu 2ème blog hhhhaza dhggdsgsg dgsggsd gsgdgsg hgdsgdsgs dsggsgds gdsgsg dsggsdg dsggsdg sdgggds dsggds',
      loveIts : 20,
      dateCreation : new Date(2019,1,23,9,44)
    },
    {
      titre : '3ème blog',
      contenu : 'contenu du 3ème blog qsggd dggdsgs qggdsg sdgggsd dsgggds sdggdsgg dsggds dsggdsg ggdsgds gggdsf dsggds gggsdg',
      loveIts : -5,
      dateCreation : new Date(2019,7,9,10,16)
    },
  ];
}
