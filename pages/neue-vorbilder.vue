<template lang="pug">
  article
    MoodImage(img="titelbild.jpg") Neue Vorbilder
    Container(size="small" margin="large")
      .uk-grid.uk-grid-large(uk-grid class="uk-child-width-1-2@s")
        p
          strong.colorbox.colorbox--block.colorbox--left.colorbox--orange.uk-text-lead Simon schließlich
          br
          span.uk-display-block.uk-text-justify 35 Jahre alt, staatlich anerkannter Erzieher in Frankfurt. Nach dem Geschichtsstudium und einem Büro-Job arbeitet er seit mittlerweile zwei Jahren als Erzieher in einem Kindergarten.

        p.uk-text-right
          strong.colorbox.colorbox--block.colorbox--right.colorbox--berry.uk-text-lead Jessica Jörges
          span.uk-display-block.uk-text-justify 23 Jahre alt, Ausbildung zur Malerin und Lackiererin als Innungsbeste 2018 abgeschlossen. Deutschlands beste Nachwuchs-Malerin 2018. Malermeisterin in vierter Generation in Dreieich bei Frankfurt.

      .uk-text-meta.uk-margin-medium-top von Arnold Wande

      hr.uk-margin-large-top.uk-margin-large-bottom

      TextboxBerry
        template(#question) Wie kam es, dass du ins Handwerk gegangen und Malerin geworden bist?
        template(#answer)
          p Ich habe während der Oberstufe immer gesagt, ich will studieren. Plötzlich war das Abi da, aber ich hatte keine Ahnung, was ich studieren wollte. Nachdem ich mich mit Studiengängen aller Art auseinandergesetzt hatte, war klar: Ich will die Schulbank nicht länger drücken und mir nur Theorie anhören, sondern ich möchte etwas Praktisches machen. Garten- und Landschaftsbau fand ich beispielsweise total interessant. Ich hatte auch Floristin im Hinterkopf, habe mich aber schließlich für die Ausbildung zum Maler und Lackierer entschieden. Seitdem habe ich keinen Tag bereut. Ich habe wirklich meine Leidenschaft darin gefunden. Deswegen liegt mir das Thema Nachwuchsförderung im Handwerk so am Herzen. Viele haben leider einen komplett falschen Eindruck von unserem Beruf.

      TextboxOrange
        template(#question) Und wie bist du zum Beruf des Erziehers gekommen?
        template(#answer)
          p Es war nicht so, dass ich nach dem Abitur gesagt habe, ich möchte Erzieher werden. Ich habe erst Geschichte studiert. Später habe ich nebenbei in einem Hort gearbeitet und diverse Male bei den Ferienspielen geholfen. Die Arbeit mit den Kindern hat mir gut gefallen und viel Spaß gemacht. Im Hort wurde ich immer wieder angesprochen, ob ich mir vorstellen könnte, eine Ausbildung zum Erzieher zu machen. Wegen des Mangels sind gerade Männer sehr gefragt. Es war also keine Initialzündung bei mir. Ich musste zwar nicht überredet, aber mir musste noch ein bisschen zugeredet werden.

      TextboxOrange
        template(#question) Was hat schließlich den Funken gegeben?
        template(#answer)
          p Ich hatte vorher im Büro an der Uni gearbeitet, diese Routine war einfach nichts für mich. Ich bin irgendwann an den Punkt gelangt, wo ich nicht zum fünfhundertsten Mal am Tag im Büro darauf angesprochen werden wollte, dass der Drucker nicht druckt. Es war mir lieber, ein Kind sagt mir: Ich habe in die Hose gemacht, kannst du mir helfen? Das war die bessere Option.

      h4
        | Erzieher und Erzieherinnen in Deutschland
        br
        span.uk-text-meta Quelle: Statistisches Bundesamt 03/2020

      img(:src="imagehosting_path(960, 'grafik-erzieher-und-erzieherinnen-in-deutschland.png')" alt="Erzieher und Erzieherinnen in Deutschland").uk-margin-large-bottom

      TextboxBerry
        template(#question) Wie haben deine Freundinnen auf deinen Berufswunsch reagiert?
        template(#answer)
          p Sie waren überrascht, weil sie das nicht von mir erwartet hatten. Aus meiner Klasse sind auch alle anderen studieren gegangen. Am Anfang war daher viel Staunen dabei und die Frage, macht sie das wirklich? Mal schauen, wie lange sie das durchhält. Es gab also Skepsis. Aber es waren auch viele aus meiner Klasse, die es cool fanden.

      TextboxBerry
        template(#question) Fand dein Vater es gut, dass du Malerin werden wolltest oder hat er dich gewarnt?
        template(#answer)
          p Mein Vater sagt aus Spaß gelegentlich: Ich habe dir doch gesagt, lern was Gescheites! Es gibt in jedem Beruf Phasen, wo es nicht so toll ist und wo man sich mit Sachen rumärgern muss. Aber warnen musste mich keiner. So schlimm war die Ausbildung nicht. Mein Vater hat mir damals gesagt, ich müsse wissen, worauf ich mich einlasse. Es sei ein körperlich anstrengender Beruf, bei dem man auch draußen arbeitet, wenn es kalt ist. Es ist ein Beruf, wo man auch dreckig wird, wo es nicht immer lustig ist und wo es stressig werden kann. Insbesondere auf der Baustelle, wenn es schnell gehen muss und dann ruppiger zugeht.

          AudioPlayer(file="/neue-vorbilder/jessica_01.mp3" :img="imagehosting_path(960, 'bild_3.jpg')").uk-margin-large-top.uk-margin-large-bottom

          p Das erste Mal Fassadenputz aufziehen. Ich war komplett fertig mit den Nerven, komplett. Als Azubi bist du derjenige, der den Putz von A nach B trägt. Der jeden mit Putzeimern versorgt, runter, hoch, alles anmischen und überall schreit es nur: Jessica hierüber! Nein dahin! Nein! Und ich stand da und habe später gesagt: Ich kann das nicht. Ich bin komplett fertig. Und alle so: Wieso denn? War doch voll gut, gab doch überhaupt kein Problem. War doch alles richtig. Und ich sage, ihr habt mich alle angeschrien. Ihr habt mich alle so angeschrien. Nee nee, das ist normal so. Aber das sind so Sachen, wo ich mittlerweile weiß, das meint keiner persönlich. Das ist einfach nur in dem Affekt. Okay, los, los, los, das muss jetzt gut werden. Und wir haben nur einen bestimmten Zeitraum, wo wir das verarbeiten können. Aber das sind so Sachen, wo ich dann dachte, jetzt weiß ich, was der Papa gemeint hat.

      TextboxOrange
        template(#question) Wie haben deine Eltern und Freunde auf die Entscheidung reagiert, Erzieher zu werden?
        template(#answer)
          p Meine Mutter ist selbst Erzieherin. Sie war zu Anfang skeptisch und hat mir davon abgeraten, weil sie wusste, wie stressig der Beruf sein kann und wie viel Verantwortung man trägt. Insofern war meine Mutter in vielen Dingen ein Vorbild für mich, aber nicht bei der Berufswahl. Sie war allerdings auch froh, dass ich nach der langen Studiererei doch etwas Handfestes machen wollte. Sie hat auch gemerkt, die Arbeit mit den Kindern ist etwas, was ich gut und gerne mache. Mein Glück ist, dass ich mir bei ihr Tipps abholen kann und sie mir den Stress nimmt, wenn ich mal Dampf ablassen muss. Und inzwischen werde ich von meinen Freunden um Rat gefragt, wenn sie bei ihren Kindern mal nicht weiterkommen. Damals noch haben mich meine Freunde gefragt, ob ich ganz sicher sei und ob ich mir das wirklich antun wolle. Ja, ich wollte und es war die richtige Entscheidung!

      TextboxBerry
        template(#question) Hattest du ein Vorbild bei deiner Berufswahl und hat dein Vater dich geprägt?
        template(#answer)
          p Schon in das Freundebuch meines Bruders aus dem Kindergarten habe ich geschrieben: Wenn ich groß bin, werde ich Malerin. Aber das war meine Schulzeit über nicht präsent. Ich hatte das unterdrückt, um dem Gesellschaftsbild gerecht zu werden, dass ein Abiturient nach dem Abitur studiert. Daher bin ich wohl durchaus geprägt von meinem Vater, obwohl ich lange nicht wusste, was er und seine Jungs da draußen machen. Er ist für mich jedenfalls ein großes Vorbild durch seine Arbeitsweise, seine Organisation und das ganze Fachwissen. Er hat sich über die Jahre ein so großes Fachwissen angeeignet. Da frage ich mich, wie soll ich das alles in meinen Kopf kriegen? Auf der anderen Seite bin ich erst 23 und er ist über 50. Hoffentlich stehe ich in 20 Jahren auch da und weiß so viel.

      img(:src="imagehosting_path(960, 'bild_6.jpg')").uk-padding-small.uk-box-shadow-medium

      TextboxOrange
        template(#question) Je jünger die Kinder sind, desto weniger Männer arbeiten in dem Bereich. Was hat es damit auf sich?
        template(#answer)
          Video(:src="{ 'video/webm': '/neue-vorbilder/simon_1.webm' }" controls).uk-pull-small.uk-margin-bottom
          p Für die meisten Männer ist es schlichtweg einfacher, mit älteren Kindern zu arbeiten. Die älteren Kinder reagieren auf Erzieher noch mal anders. Sie nehmen die Vorbildrolle viel stärker wahr, die man als Mann ausstrahlt. Es gibt aber oftmals auch noch Vorbehalte von Eltern gegenüber Männern in der Krippe. Dort gehört das Wickeln von Kleinkindern beispielsweise zur täglichen Arbeit. Manche Männer wollen sich keinem Generalverdacht aussetzen. Bei mir war der Schritt in den Kindergarten tatsächlich das Interesse an der Arbeit. Ich habe aber viele Kollegen in der Ausbildung getroffen, die gesagt haben, es sei zwar interessant in der Krippe zu arbeiten, aber sie möchten nicht Gefahr laufen, dass sie beschuldigt werden oder ihnen etwas angelastet wird.

      TextboxOrange
        template(#question) Bleiben Erzieher also der Krippe fern aus Sorge vor Beschuldigungen?
        template(#answer)
          p Es gibt Eltern, die nicht möchten, dass ihr Kind von einem Mann gewickelt oder zur Toilette begleitet wird. Auf mich ist aber noch kein Vater und keine Mutter deswegen zugekommen. Ich habe das Glück, dass die Kinder in meiner Gruppe älter oder schon sauber aus der Krippe gekommen sind. Aber wenn ein Kind angelaufen kommt und sagt: Ich habe es nicht auf die Toilette geschafft. Dann ist man auch als Erzieher gefragt. In meiner Einrichtung unterscheidet die Leitung nicht zwischen männlichen und weiblichen Kräften. Das gibt mir eine große Sicherheit zu wissen, der Träger und die Leitung stehen hinter einem. Aber es gibt auch Einrichtungen, wo die männlichen Kräfte nicht wickeln sollen, um Diskussionen mit den Eltern aus dem Weg zu gehen.

      TextboxBerry
        template(#question) Hast du im Betrieb auch eine Kollegin?
        template(#answer)
          p Aktuell nicht. Ich hätte gerne eine Kollegin. Wir haben allerdings eine Auszubildende. Ich würde mich freuen, wenn mehr Mädels sich trauen, in Handwerksberufe zu gehen. Dafür muss sich aber auch das Bild in der Gesellschaft ändern. Das Handwerk ist leider nicht mehr so angesehen, wie es das mal war. Ich glaube auch, dass Eltern oder Lehrer teilweise den Mädels die Ausbildung im Handwerk wieder ausreden und sagen, mach doch lieber ein Studium, das ist sicherer. Dabei werden händeringend Leute im Handwerk gesucht und die Berufsaussichten sind sehr gut.

      div(uk-slider="autoplay: true; autoplay-interval: 2000")
        ul.uk-slider-items.uk-grid.uk-grid-small(uk-grid class="uk-child-width-1-3@s")
          li
            img(:src="imagehosting_path(480, 'galerie_1.jpg')")
          li
            img(:src="imagehosting_path(480, 'galerie_2.jpg')")
          li
            img(:src="imagehosting_path(480, 'galerie_3.jpg')")
          li
            img(:src="imagehosting_path(480, 'galerie_4.jpg')")
          li
            img(:src="imagehosting_path(480, 'galerie_5.jpg')")

      TextboxBerry.uk-margin-top
        template(#question) Hast du dir auch schon mal einen Spruch gefangen?
        template(#answer)
          AudioPlayer(file="/neue-vorbilder/jessica_02.mp3" :img="imagehosting_path(960, 'bild_1.jpg')").uk-margin-top.uk-margin-bottom
          p Das erste Mal Fassadenputz aufziehen. Ich war komplett fertig mit den Nerven, komplett. Als Azubi bist du derjenige, der den Putz von A nach B trägt. Der jeden mit Putzeimern versorgt, runter, hoch, alles anmischen und überall schreit es nur: Jessica hierüber! Nein dahin! Nein! Und ich stand da und habe später gesagt: Ich kann das nicht. Ich bin komplett fertig. Und alle so: Wieso denn? War doch voll gut, gab doch überhaupt kein Problem. War doch alles richtig. Und ich sage, ihr habt mich alle angeschrien. Ihr habt mich alle so angeschrien. Nee nee, das ist normal so. Aber das sind so Sachen, wo ich mittlerweile weiß, das meint keiner persönlich. Das ist einfach nur in dem Affekt. Okay, los, los, los, das muss jetzt gut werden. Und wir haben nur einen bestimmten Zeitraum, wo wir das verarbeiten können. Aber das sind so Sachen, wo ich dann dachte, jetzt weiß ich, was der Papa gemeint hat.
          | Aktuell nicht. Ich hätte gerne eine Kollegin. Wir haben allerdings eine Auszubildende. Ich würde mich freuen, wenn mehr Mädels sich trauen, in Handwerksberufe zu gehen. Dafür muss sich aber auch das Bild in der Gesellschaft ändern. Das Handwerk ist leider nicht mehr so angesehen, wie es das mal war. Ich glaube auch, dass Eltern oder Lehrer teilweise den Mädels die Ausbildung im Handwerk wieder ausreden und sagen, mach doch lieber ein Studium, das ist sicherer. Dabei werden händeringend Leute im Handwerk gesucht und die Berufsaussichten sind sehr gut.

      TextboxBerry
        template(#question) Müssen sich Frauen in Handwerksberufen an den Ton der Männer anpassen oder sogar selbst zum Kerl werden?
        template(#answer)
          p An den rauen Umgangston muss sich keiner anpassen. Aber wenn man als Frau auch mal gerne einen dummen Spruch drückt, kann sie das natürlich. Da muss sich niemand verstecken nach dem Motto: Ich bin eine Frau, ich darf jetzt nichts Ungehobeltes sagen. Aber sie muss auch nicht alle Baustellen-Klischees erfüllen, weil sie eine Ausbildung auf dem Bau macht. Es gibt daher zwei Optionen, wenn der Kollege fragt: Nah, kriegst du es hin oder muss ich bissi helfen? Entweder man spielt mit und sagt etwas Lustiges zurück oder man spiegelt, dass man solche Sprüche nicht witzig findet.

      TextboxBerry
        template(#question) Müssen sich Frauen in Handwerksberufen an den Ton der Männer anpassen oder sogar selbst zum Kerl werden?
        template(#answer)
          p An den rauen Umgangston muss sich keiner anpassen. Aber wenn man als Frau auch mal gerne einen dummen Spruch drückt, kann sie das natürlich. Da muss sich niemand verstecken nach dem Motto: Ich bin eine Frau, ich darf jetzt nichts Ungehobeltes sagen. Aber sie muss auch nicht alle Baustellen-Klischees erfüllen, weil sie eine Ausbildung auf dem Bau macht. Es gibt daher zwei Optionen, wenn der Kollege fragt: Nah, kriegst du es hin oder muss ich bissi helfen? Entweder man spielt mit und sagt etwas Lustiges zurück oder man spiegelt, dass man solche Sprüche nicht witzig findet.

      TextboxBerry
        template(#question) Was sind denn die gängigen Vorurteile euch Malerin gegenüber?
        template(#answer)
          AudioPlayer(file="/neue-vorbilder/jessica_03.mp3" :img="imagehosting_path(960, 'bild_4.jpg')").uk-margin-top.uk-margin-bottom
          p Dass wir nur die sind, die dreckig rumlaufen, die alles einsauen und Wände nur weiß streichen. Wie vielfältig der Beruf ist und was für schöne Sachen wir machen, das sehen viele nicht. Beruf sind jetzt zum Beispiel auch Bodenbelege. Auch das machen wir mit als ich. Wir machen jetzt keinen Echtholzparkett wie der Schreiner, aber auch ganz viele verschiedene Bodenbeläge. Alles, was in Großraumbüros liegt, dieser Nadelfilz oder so diese Riesen Anna Rollenware es sind alles Teilbereiche formaler Beruf. Wer weiß, wo auch keiner. Und wie alt es sind, so viele Sachen, wo man sagt, das ist der. Der Beruf ist einfach so vielfältig. Und man kann damit so viel machen. Das ist einfach ich ich. Ich habe das Gefühl, das kommt noch nicht so so rüber. Ach, sind diese Außendarstellung, und da ist ein bisschen auch. Sind die dem alle auch selbst dafür verantwortlich, wie sie sich halt auch präsentieren, als ich sie auch oft genug für Mäuse? Ujuiu das sieht jetzt net so Bombe aus.

      TextboxOrange
        template(#question) Wie hältst du dieses Kindergeschrei den ganzen Tag aus?
        template(#answer)
          AudioPlayer(file="/neue-vorbilder/arnold_01.mp3" :img="imagehosting_path(960, 'bild_7.jpg')").uk-margin-top.uk-margin-bottom
          p Das ist eine Übungssache. Irgendwann filtert man den Lärm raus und genießt die Momente umso mehr, wenn es ruhig ist. Ich nehme mir aber auch bewusst Ruhepausen. Auf dem Außengelände sind laute Kinderstimmen auch noch gut zu ertragen. Der richtige Lärm entsteht erst im Gruppenraum. Die Räume sind nicht groß, da wird es schnell nervig. Dann muss ich die Kinder direkt anhalten leiser zu sein, der Krach wäre sonst zu groß.

      TextboxOrange
        template(#question) Frankfurt ist eine multikulturelle Stadt. Wie begegnen dir die Eltern, die aus patriarchalisch geprägten Kulturen kommen?
        template(#answer) Das ist sehr unterschiedlich. Einerseits merke ich, wie sich einige Eltern fragen: Was macht der denn hier, was ist das für einer? Auf der anderen Seite werde ich von einigen Eltern nicht nur als Erzieher wahrgenommen, sondern als Autorität. Da hat das Wort dann Gewicht, wenn ich sage, so wird das gemacht und es wird erst gar nicht diskutiert. Das ist erst mal gewöhnungsbedürftig, aber Männer werden von Eltern mit entsprechendem Weltbild wirklich als eine Autorität in diesem Beruf angesehen.

      TextboxOrange
        template(#question) Reagieren auch die Kinder anders auf dich als bei den Kolleginnen?
        template(#answer)
          Video(:src="{ 'video/webm': '/neue-vorbilder/simon_2.webm' }" controls).uk-pull-small.uk-margin-bottom
          p Klar nehmen die Kinder einen als Mann noch mal anders wahr. Sie projizieren ihr Papa-Rollenmodell gefühlt auch eher auf einen Erzieher als die Mama-Rolle auf eine Erzieherin. Das, was typischerweise die Väter mit ihren Kindern machen, also toben, ein bisschen wilder und lauter sein, das wird von den Kindern bei Erziehern häufig gewünscht. Viele männliche Erzieher bieten das auch gerne. Ich mache auch immer wieder mal Quatsch mit den Kindern. Das sind Situationen, in denen sich die Rollenklischees bewahrheiten.

      TextboxBerry
        template(#question) Wie haben deine Kollegen dich aufgenommen?
        template(#answer)
          p Ich hatte Glück, da ich im Betrieb meiner Eltern gelernt habe. Ich wurde also sehr gut von meinen Kollegen aufgenommen. Ob das daran lag, dass ich die Tochter vom Chef bin, schwer zu sagen. Beim Einkaufen von Material im Großhandel habe ich allerdings gemerkt, dass die noch nicht oft Frauen in Malerkleidung gesehen hatten. Aber selbst da habe ich nie einen Spruch gefangen. Ich hatte bisher wirklich Glück, wenn ich lese, was andere Frauen sich anhören müssen. Es gibt auf <a href="https://www.instagram.com/handwerk.revolte" target="_blank">Instagram eine Seite wo Frauen ihre Erlebnisse teilen und auf Diskriminierung im Handwerk aufmerksam machen</a>. Es tut mir wirklich leid, was manche junge Frauen schon alles mitmachen mussten.

      TextboxBerry
        template(#question) Fürchten Männer die Konkurrenz, weil Frauen sogar manche Dinge besser können?
        template(#answer)
          p Ich habe auch Mädels in der Ausbildung gesehen, denen filigranes Arbeiten fremd war. Andererseits gibt es Männer, die achten zu 100 Prozent auf Sorgfalt. Während andere ihre Arbeit nur hin klatschen. Das ist eher eine Typen-Sache. Aber Frauen schaffen ein ganz anderes Klima im Betrieb und auf der Baustelle. Bei meinen Kollegen fliegen sicherlich auch die Sprüche und es geht ruppiger zu, aber nicht, wenn ich da bin. Frauen tragen sicherlich zu einer besseren Atmosphäre und mehr Harmonie bei. Wobei es auch durchaus Frauen gibt, die sich auf den Ton einlassen und ordentlich mitfrotzeln.
</template>
<script>
import imagehosting from '~/plugins/imagehosting.mixin'

export default {

  components: {
    TextboxBerry: {
      template: `
        <div class="colorbox-wrapper uk-margin-large-top">
          <div class="uk-float-right uk-text-right@s uk-width-3-5@s">
            <span class="colorbox colorbox--right colorbox--berry"><slot name="question" /></span>
          </div>
          <div class="uk-clearfix"></div>
          <div class="uk-margin-top uk-text-right@s">
            <slot name="answer" />
          </div>
        </div>`
    },
    TextboxOrange: {
      template: `
        <div class="colorbox-wrapper uk-margin-large-top">
          <div class="uk-width-3-5@s">
            <span class="colorbox colorbox--left colorbox--orange"><slot name="question" /></span>
          </div>
          <div class="uk-margin-top">
            <slot name="answer" />
          </div>
        </div>`
    }
  },
  mixins: [
    imagehosting
  ],
  layout: 'article'
}
</script>

<style lang="scss">
@import '~/assets/uikit.variables.scss';

$berry: #2c4c5e;
$orange: #dc8c28;

.colorbox {
  &--block {
    display: inline-block;
    padding: 0 12px;
    margin-bottom: 12px;
  }

  &:not(.colorbox--block) {
    box-decoration-break: clone;
    padding: 6px 12px;
  }

  &--left {
    margin-left: -12px;
  }

  &--right {
    margin-right: -12px;
  }

  &--orange {
    background-color: $orange;
    color: mix($orange, white, 15%)
  }

  &--berry {
    background-color: $berry;
    color: mix($berry, white, 15%)
  }
}

</style>
