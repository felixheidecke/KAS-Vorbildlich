<template lang="pug">
  article
    MoodImage(v-if="mediaquery.s" img="703d058a28f2c90e871723625beed5df.jpg")
      | Herz aus Carbon

      template(v-slot:intro)
        p(style="color:white; text-shadow: 1px 1px 3px black;") „Viele Leute denken, dass ich auch geistig behindert wäre, dabei bin ich im Kopf top fit.<br class="uk-visible@m"> Nur sehen das viele Menschen einfach nicht“, erzählt Ibrahim Khaled.<br class="uk-visible@m"> Der 26-Jährige sitzt im Rollstuhl, denn er hat keine Beine mehr. Seine Prothesen,<br class="uk-visible@m"> die in Markenschuhen stecken, sind für viele erstmal ein Blickfang. Auf den Menschen<br class="uk-visible@m"> hinter den Prothesen achten die meisten zunächst nicht.

    MoodImage(v-else img="703d058a28f2c90e871723625beed5df.jpg")
      | Herz aus Carbon

    Container(size="small" margin="medium")

      span.uk-text-meta von Hanna Loben

      p(v-if="!mediaquery.s") „Viele Leute denken, dass ich auch geistig behindert wäre, dabei bin ich im Kopf top fit.<br class="uk-visible@m"> Nur sehen das viele Menschen einfach nicht“, erzählt Ibrahim Khaled.<br class="uk-visible@m"> Der 26-Jährige sitzt im Rollstuhl, denn er hat keine Beine mehr. Seine Prothesen,<br class="uk-visible@m"> die in Markenschuhen stecken, sind für viele erstmal ein Blickfang. Auf den Menschen<br class="uk-visible@m"> hinter den Prothesen achten die meisten zunächst nicht.

      p Eigentlich wollte er Polizist werden. Nach einer schweren Blutvergiftung, multiplem Organversagen und fünf Monaten im Koma verliert Ibo, wie ihn seine Freunde und Verwandten nennen, beide Beine. Auch seine Arme kann der damals 21-Jährige heute nur noch eingeschränkt nutzen. „Mir wurden etliche Muskeln entnommen, die für die hundertprozentige Greiffunktion zuständig sind“, erzählt er. Nur so konnten zumindest seine Arme vor der Amputation gerettet werden.

      YouTube(videoId="WnMqwrjQ0vw").uk-aspect-ratio-16-9

      p Ibo ist einer von rund 154.000 Menschen, die in Deutschland jährlich eine Sepsis erleiden. Rund ein Drittel der Erkrankten sterben an den Folgen der Blutvergiftung. Damit ist eine Blutvergiftung die dritthäufigste Todesursache in Deutschland. Ibo gehört zu denen, die den <a href="https://youtu.be/z0GrRetUfNA" target="_blank">👁‍🗨 <u>Kampf gegen die Sepsis</u></a> überlebt haben.

      p Unterstützt wird Ibo von seiner Familie, insbesondere von seinem kleinen Bruder Ismail und seiner Mutter Amira. Ismail ist damals zwölf Jahre alt, als sein Bruder plötzlich ins Krankenhaus musste. „Es war eine komische Zeit“, erzählt er. Heute steht der 17-Jährige kurz vor seinem Abitur und hilft Ibo im Alltag.

      YouTube(videoId="d5ZN9iXrW0M").uk-aspect-ratio-16-9

      p Trotz der Blutvergiftung lässt sich Ibo nicht unterkriegen. Nach zwei Jahren Bettlägerigkeit trainiert er nun regelmäßig, um wieder mit beiden - wenn auch künstlichen - Beinen im Leben zu stehen. Dafür fährt Ibo drei Mal die Woche in die Gehschule nach Troisdorf bei Bonn. Seit drei Jahren trainiert er dort das Laufen und baut seine Muskeln wieder auf. „Anfangs war ich nach ein paar Metern gehen schon total kaputt. Mittlerweile gehe ich bei den Übungen ein paar hundert Meter”, erklärt er. „Es ist keine große Distanz und es gibt noch Luft nach oben. Wenn ich andere sehe die gehen können, dann denke ich mir: Auch wenn es länger dauert, das will ich auch schaffen.“

      YouTube(videoId="wev9Mvn1s3s").uk-aspect-ratio-16-9

      p Seine Erfolge, Gedankengänge und seinen Alltag hält Ibo auf Instagram unter dem Namen „carbonibo” fest. Dort hat er Anfang des Jahres eine Kampagne zum Thema Motivation gestartet. „Ich habe anhand von Bildern und Texten meine Geschichte erzählt und verschiedene Themen behandelt, zum Beispiel Selbstständigkeit, Kampfgeist oder Abhängigkeit.“ Ibo freut sich über die Reaktionen seiner Follower und ist froh über positives und negatives Feedback. „Ich zeige den Menschen dort, dass man immer etwas Positives aus jeder Situation mitnehmen kann, egal wie schlecht es einem auch geht.“

      YouTube(videoId="TDiQQjerYOM").uk-aspect-ratio-16-9

      p Doch bevor er seinen Account auf Instagram mit Fotos und Videos befüllen konnte, musste er die Bedienung des Smartphones neu lernen. „Es war eine monatelange Übung, das Handy richtig halten zu können. Ich musste Muskelgruppen neu trainieren, weil ich das Handy nicht wie jeder andere in der Hand halte, sondern am Handgelenk. Das sind ganz verschiedene Muskelgruppen, die dafür angeregt und trainiert werden müssen.“ Um den Gebrauch seiner Hände zu trainieren, geht Ibo regelmäßig zur Ergotherapie. Dort lernt er auch das Schreiben nochmal neu. „Es ist unüblich, den Stift so zu halten wie ich. Aber unmöglich ist es nicht.“ Statt aus dem Handgelenk kommt die Bewegung zum Schreiben bei Ibo aus der Schulter. „Es dauert länger, aber langsam lerne ich es auf meine etwas andere Art und Weise.“

      YouTube(videoId="LEeZIzZpw5c").uk-aspect-ratio-16-9

      p Vor der Blutvergiftung war Ibo leidenschaftlicher Torwart beim TSC Euskirchen und fokussierte sich neben dem Fußball auf seine Karriere. „Ich wollte immer Polizist werden, habe mein Abitur fertig gemacht und war bei der Aufnahmeprüfung der Polizei“, erzählt er. „Es sah sehr gut aus und ich wäre angenommen worden, doch dann kam die Sepsis und hat mich aus der Bahn geworfen.“ Heute strebt Ibo ein neues Ziel an, dass für viele eigentlich selbstverständlich ist: Seine Eigenständigkeit. „Ich möchte ein unabhängiges Leben führen, in dem ich auf niemand anderen angewiesen bin.“

</template>

<script>
import imagehosting from '~/plugins/imagehosting.mixin'
import mediaquery from '~/plugins/mediaquery.mixin'

export default {

  mixins: [
    imagehosting,
    mediaquery
  ],

  layout: 'article'
}
</script>
