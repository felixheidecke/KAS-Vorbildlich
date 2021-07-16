<template lang="pug">
  article
    MoodImage(img="foto1_respectmysize1_credit_vierfotografen.jpeg")
      div(style="transform:translateY(15px)") Das Kurvenmodel

    Container(size="small" margin="medium")
      LeadingParagraph Eine kurvige Miss Germany? Julia Kremer hätte es fast geschafft: Als erstes Plus-Size-Model war sie dieses Jahr unter den Finalistinnen des Wettbewerbs. Mit der Teilnahme, ihrem Blog und einem Instagramkanal will sie kurvigen Frauen Mut machen, Sehgewohnheiten ändern und gegen die Stigmatisierung von dicken Menschen ankämpfen. Eine persönliche und gesellschaftliche Herausforderung.

      span.uk-text-meta von Marlene Resch

      hr.uk-margin-medium-top.uk-margin-medium-bottom

      p Egal ob „eklig“, „undiszipliniert“ oder „hässlich“, ob in der Schule, beim Arzt oder bei der Berufswahl - Julia Kremer kann viele Situationen aufzählen, in denen sie aufgrund ihres Gewichts beleidigt wurde. Auch ihr Berufseinstieg beginnt so: „Mit einer Kleidergröße 42 wirst du keinen Job als Moderatorin finden“, kriegt sie ins Gesicht geschmettert, als sie sich für eine Moderationsausbildung anmelden will. Julia Kremer schüttelt immer noch ungläubig den Kopf, wenn sie daran denkt. „In meiner Karriere sind mir aufgrund meiner Statur so viele Türen verschlossen geblieben, einfach nur, weil irgendwer meint, andere so zu kategorisieren.“

      p Statt dem Moderationstraum nachzutrauern, verfolgt Kremer ihr eigentliches Ziel: Journalistin  werden. Sie gründet den Blog SchönWild: Was als eine Art Tagebuch klein begann, erreicht mittlerweile über 87.000 Menschen auf Instagram. Dort bloggt sie zu Fashion, Bodypositivity und Lifestyle, macht Werbung für bekannte Marken wie Tamaris, Dove und C&amp;A. Sie hat es geschafft, vom Influencing zu leben. Und das, obwohl sie zu Beginn vom bloggen wenig selbstbewusst war: „In meiner Karriere sind mir aufgrund meiner Statur viele Türen verschlossen geblieben, einfach nur, weil wir in unserer Gesellschaft (unbewusst) fettfeindlich sozialisiert sind und das dazu führt, dass man gerade als kurvige Frau vielen Vorurteilen ausgesetzt ist. Ich habe immer wieder gehört, dass Menschen nicht gedacht hätten, dass ich so smart und diszipliniert sei, aufgrund meiner Statur.“ Von blöden Sprüchen will sich die 31-Jährige nicht mehr beeindrucken lassen: Dieses Jahr hat sie es als erstes Plus-Size-Model unter die Finalistinnen von Miss Germany geschafft hat und damit Geschichte geschrieben. Julia Kremer wirkt selbst noch ein wenig überrascht, wenn sie darüber spricht.

    Container
      ul.uk-grid.uk-child-width-1-1(uk-grid class="uk-child-width-1-2@s uk-child-width-1-4@m")
        li
          img(:src="imagehosting_path(480, 'galerie1_kremer.jpg')").uk-box-shadow-medium
        li
          img(:src="imagehosting_path(480, 'galerie2_kremer.jpg')").uk-box-shadow-medium
        li
          img(:src="imagehosting_path(480, 'galerie3_kremer.jpg')").uk-box-shadow-medium
        li
          img(:src="imagehosting_path(480, 'galerie4_kremer.jpg')").uk-box-shadow-medium

    Container(size="small" margin="medium")
      p Mit ihrem Selbstbewusstsein möchte sie Vorbild für andere kurvige Frauen zu sein: Das, was ihr früher selbst gefehlt habe, erzählt sie. Denn die Fettfeindlichkeit in der Gesellschaft fange schon mit der Darstellung von dicken Menschen in den Medien an: „Schaut man sich Filme an, spielen kaum dicke oder kurvige Person eine Hauptrolle, ohne dass sie irgendein Thema mit ihrem Gewicht hat. Das Gewicht wird immer thematisiert: Und immer muss die Protagonistin am Ende abnehmen, um glücklich zu sein, um einen Mann zu finden. Eine kurvige Frau darf nicht einfach existieren, so wie sie ist. Können wir vielleicht mal verinnerlichen, dass es Menschen gibt, die einfach eine rundere Statur haben. Genauso wie es Menschen gibt, die nicht zunehmen?“, sagt Kremer aufgebracht.

      Video(v-if="mediaquery.s" autoplay loop :src="videoMissGermany.desktop").uk-margin-large-left.uk-margin-large-right.uk-margin-large-bottom
      Video(v-if="!mediaquery.s" autoplay loop :src="videoMissGermany.mobile")

      p Einfach existieren zu können, ohne Anfeindungen, Mobbing und Diskriminierung, das wünscht sich Julia Kremer. Sie scheint fast müde, das imantraartig immer wieder zu wiederholen. „Jedes Mal wenn ich auf mein Gewicht angesprochen werde und darauf reduziert werde, dann triggert das was in einem, das stresst einen und das ist es, was es am Ende lebensbedrohlich macht. Es gibt Studien die zeigen, dass Diskriminierung mehrgewichtiger Menschen sehr viel gravierendere Auswirkungen haben.“  Sie selbst hatte jahrelang mit Essstörungen zu kämpfen und arbeitete mittels Traumatherapie daran, auch negative Gedanken gegenüber sich selbst und ihrem Körper abzubauen.

      p Als im Sommer 2020 eine Hotelbesitzerin aus Cuxhaven äußert, den Anblick von dicken Menschen „ertragen zu müssen“ sei diskriminierend, ist das für Julia Kremer ein Tropfen auf den heißen Stein. Es wird Zeit für sie, noch lauter zu werden: Gemeinsam mit Bloggerin Verena Prechtl ruft sie den Hashtag #RespectMySize ins Leben, mit dem sie die Stigmata, die dicken Menschen tagtäglich entgegengebracht werden, sichtbar machen wollen. Durch ihre zusätzliche Ausbildung zur Kreativkonzepterin versteht Kremer es, solche Botschaften einprägsam zu verbreiten. So interpretiert sie auch den Anspruch nach mehr Sichtbarkeit ganz wörtlich: Bei einem Shooting bemalen sich die kurvigen Frauen mit den Begriffen, mit denen sie beleidigt werden und rufen zum Mitmachen auf.

    AudioPlayer(v-bind="audio01" :class="{ 'uk-margin-small-top uk-margin-medium-bottom uk-container' : mediaquery.s }")

    Container(size="small" margin="medium")
      p Wenn Kremer von der Kampagne erzählt, wirkt sie gerührt. Für sie sei der Hashtag ein voller Erfolg gewesen, ein Moment, der sie in dem was sie tut, bestärkt hat: „Wir haben Tag und Nacht dafür gearbeitet und so viel da rein gesteckt. Da war es wirklich schön zu sehen, dass das Gehör gefunden hat.“ Dabei sei ihr deutlich geworden, wie wichtig es ist, Verbündete zu haben und Erfahrungen zu teilen: „Da ist uns zum ersten Mal so richtig bewusst geworden, dass wir alle in einem Boot sitzen und dass diese Diskriminierung ganz viele Menschen betrifft und natürlich nicht die Norm sein sollte.“

      p Doch nicht bei allen trifft Julia Kremers Engagement auf Gefallen. Kremer wird auch mit Hasskommentaren konfrontiert: „Als Frau kriegst du immer Hasskommentare, egal was du machst - aber als kurvige Frau natürlich noch einmal besonders“, sagt Kremer. Unter einem Video zu Julia Kremers Auftritt beim Sat.1 Frühstücksfernsehen ist beispielsweise zu lesen: „Ich dachte die Miss Wahlen wollen die schönste Frau Deutschlands aber anscheinend wollen sie die hässlichste“. Um sich zu schützen, versucht Kremer derartige Kommentare mit Humor zu nehmen, aber das sei nicht immer leicht: „Ganz viele Leute wissen nicht, was dieser Job im Internet so mit sich bringt. Und das ist echt eine große Kehrseite und die sollten wir uns bewusst machen.“

      div(:class="{ 'uk-margin-medium-left uk-margin-medium-right' : mediaquery.s}")
        ul.uk-grid(uk-grid class="uk-child-width-1-2@s").uk-child-width-1-1
          li
            img(:src="this.imagehosting_path(640, 'screenshot_20210524-171048_instagram.png')").uk-box-shadow-medium
          li
            img(:src="this.imagehosting_path(640, 'screenshot_20210524-171219_instagram.png')").uk-box-shadow-medium

        AudioPlayer(file="/das-kurvenmodel/julia-audio-03.mp3" waveColor="#FFF" progressColor="#000").uk-margin-medium-top.uk-border-rounded

    Container(size="small" margin="medium")
      p Eine weitere Hürde des Bloggens: Selbst die Algorithmen seien diskriminierend gegenüber kurvigen Models – das sei besonders schwierig, wenn man fehlende Reichweite vor Kunden rechtfertigen müsse, meint Kremer. Das Modebusiness von innen heraus verändern zu wollen, koste viel Kraft. Woher sie diese nehme?„Ich musste in meinem Leben bisher immer kämpfen. Durch meine Jugend und die starke Diskriminierung und das Mobbing, das ich dort erfahren habe.“ Diese Erfahrungen haben ihr neben tiefen Wunden auch Antrieb gegeben: „Ich habe gesehen, wie ungerecht es ist und dass es nicht so weiter gehen darf. Dieser Drang nach Gleichberechtigung hat mich angetrieben, etwas zu verändern.“

      AudioPlayer(v-bind="audio02").uk-margin-small-top.uk-margin-medium-bottom.uk-width-medium

      p Doch diesen Kampf kann und will sie nicht alleine kämpfen: „Für mich ist es wichtig, dass das auch schlanke Frauen und Männer verstehen und im besten Fall hinter dem stehen, was ich sage“, betont sie. Der Kampf gegen Körperdiskriminierung sei schließlich am Ende ein feministischer Akt: „Vor fünf bis zehn Jahren hätte ich nie gedacht, dass ich mal sage, dass ich Feministin bin, aber nach und nach habe ich verstanden, dass genau das der Punkt ist, woran es am Ende hakt.“

      p Julia Kremers neuestes Projekt gegen Bodyshaming: Ein Podcast mit dem provokanten Titel „Fett und Vorurteil“. Darin spricht sie mit der Mitinitiatorin von #RespectMySize Verena Prechtl zum Beispiel über Diätkultur, Fettphobie und Männer, die nur heimlich auf kurvige Frauen stehen. Ein Format ohne Bild, nur mit Ton, das am Ende genau das deutlich macht, was auch Kremers Anliegen ist: Wie jemand aussieht, sollte keine Rolle spielen.

      hr

      ul
        li.uk-text-meta Fotocredits Instagram: @schoenwild
        li.uk-text-meta Fotocredits #RespectMySize: Vierfotografen

</template>

<script>
import mediaquery from '~/plugins/mediaquery.mixin'
import imagehosting from '~/plugins/imagehosting.mixin'

export default {
  mixins: [
    imagehosting,
    mediaquery
  ],
  layout: 'article',

  computed: {
    videoMissGermany () {
      return {
        mobile: {
          'video/webm': '/das-kurvenmodel/Video1_MissGermany_mobile.webm',
          'video/mp4': '/das-kurvenmodel/Video1_MissGermany_mobile.mp4'
        },
        desktop: {
          'video/webm': '/das-kurvenmodel/Video1_MissGermany.webm',
          'video/mp4': '/das-kurvenmodel/Video1_MissGermany.mp4'
        }
      }
    },

    audio01 () {
      return {
        file: '/das-kurvenmodel/julia-audio-01.mp3',
        img: this.imagehosting_path(1200, 'foto2_respectmysize2_credit_vierfotografen.jpg'),
        waveColor: '#d0bfa5',
        progressColor: '#5e3c27'
      }
    },

    audio02 () {
      return {
        file: '/das-kurvenmodel/julia-audio-04.mp3',
        img: this.imagehosting_path(640, 'foto5_selflove.jpg'),
        waveColor: '#fff',
        progressColor: '#bf4951',
        pos: 'left'
      }
    }
  }
}
</script>
