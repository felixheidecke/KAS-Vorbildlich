<template lang="pug">
  article

    .uk-position-relative.uk-background-fixed(v-bind="moodImage")

      .uk-position-center.uk-position-z-index

        h1.uk-margin-remove.uk-heading-large Sie gründete

      .uk-position-bottom-center.uk-position-z-index.uk-position-large

        span.uk-text-small von Juliane Heßmann

    Container(size="small" margin="medium")

      AudioPlayer(file="/die-gruenderin/audio_01.mp3" :img="imagehosting_path(480, '9cba6f1cd7d53a34fc9a8caae6f53903.jpg')" pos="left" progressColor="#FFE94A" waveColor="#FFF").uk-width-medium.uk-margin-small-top.uk-margin-medium-bottom.uk-box-shadow-large

      p „Ganz früher wollte ich Sängerin werden. Das war mein Kindheitstraum“, schmunzelt Jessica Büttner. „Später, als es dann darum ging, sich fürs Studium zu bewerben, wusste ich nicht, was ich machen soll. Ich habe mich verloren gefühlt und mich auf fast alle Studienangebote beworben. Es gab keine sinnvolle vorbereitende Berufsorientierung.“ Mit Gründerinnen und Gründern kam Jessica Büttner während der Schullaufbahn nicht in Kontakt. „Das geht doch so nicht. Einen Berufswunsch bildet man schließlich während der Schulzeit.“

      p Während des Studiums kam bei Jessica Büttner der Gedanke auf, eine Firma zu gründen. Sie studierte Sozialwissenschaften im Bachelor und European Culture and Economy im Master. Parallel sammelte sie Berufserfahrungen und leitete Seminare in einer Akademie. „Bei einem der Seminare besuchten wir ein Start-Ups und ich kam zum ersten Mal in Kontakt mit Gründern. Das war eine andere Mentalität. Die hatten eine Popcorn-Maschine und waren so begeistert von ihrer Arbeit“, Jessica Büttner erinnert sich noch genau daran, was sie direkt an der Arbeitskultur in Start-Ups faszinierte. Es war locker, man arbeitete ohne Barrieren und super effizient. Eine ganz andere Mentalität: „Ich war so beeindruckt, dass die Mitarbeiter Klartext gesprochen haben, auch dem Chef gegenüber. Die waren so ehrlich miteinander.“ Von dieser Atmosphäre inspiriert, wechselte sie als Beraterin in ein Gründungszentrum, welches Start-Ups betreut. Begeistert von der effektiven Arbeitsweise und motiviert durch dieses Umfeld wuchs in ihr die Frage: Kann ich das auch? Gründen?

    Container(v-if="mediaquery.s")
      AudioPlayer(file="/die-gruenderin/audio_02.mp3" :img="imagehosting_path(1600, '6fdc9280bb539f8eae06a6ccd5642dd6.png')" progressColor="#FFE94A" waveColor="#FFF").uk-margin-medium-bottom.uk-box-shadow-large.uk-padding-small
    template(v-else)
      AudioPlayer(file="/die-gruenderin/audio_02.mp3" :img="imagehosting_path(640, '6fdc9280bb539f8eae06a6ccd5642dd6.png')" progressColor="#FFE94A" waveColor="#FFF")

    Container(size="small" margin="medium")

      p Ein Kontakt aus dem Gründungszentrum hatte Anfang 2020 eine Idee, die Jessica Büttner begeisterte. Sie stieg mit ein und die Zwei gründete das Software-Start-Ups idea-ly. Als Frau ist sie die Ausnahme in der männlich-dominierten Start-Up Welt. 2019 lag der Anteil der Gründerinnen bei 15,7 Prozent, die anderen Gründerteams sind rein männlich.

      Chart(:options="chart")

      p Als Vorbilder hätten ihr Gründerinnen geholfen. Die gabs aber nicht. Deswegen suchte  sich Jessica Büttner Unterstützung aus ihrem privaten Umfeld. Ein Vorbild, welches sie immer leitete, ist ihre Mutter.

      //- AudioPlayer(file="/die-gruenderin/audio_03.mp3" :img="imagehosting_path(1600, '14e1d36bcf5dc12d029461bc4f122306.jpg')" progressColor="#FFE94A" waveColor="#FFF" pos="left").uk-width-medium.uk-margin-small-top.uk-margin-medium-bottom

      div(:style="{ background: '#1E4456' }")

        AudioPlayer(file="/die-gruenderin/audio_03.mp3" progressColor="#FFE94A" waveColor="#BAC6CB").uk-margin-small-top.uk-margin-medium-bottom

      p Auch viele ihrer Freundinnen sind beruflich erfolgreich darin, ihre eigenen beruflichen Ziele zu verfolgen: „Das sind Frauen, die sich hohe Ziele gesetzt haben und erfolgreich sind in dem was sie tun. Eine ist bei der Europäischen Kommission. Eine andere trägt viel Verantwortung bei der Bank. Eine andere übernimmt einen Verlag“. Der Erfolg der Freundinnen, auch wenn keine Gründerin darunter ist, macht ihr Mut.

    Container(v-if="mediaquery.s")
      AudioPlayer(file="/die-gruenderin/audio_04.mp3" :img="imagehosting_path(1600, '0d3660b9f6d5c5fd100bdf72756a7172.png')" progressColor="#FFE94A" waveColor="#FFF").uk-margin-medium-bottom.uk-box-shadow-large.uk-padding-small
    template(v-else)
      AudioPlayer(file="/die-gruenderin/audio_04.mp3" :img="imagehosting_path(640, '0d3660b9f6d5c5fd100bdf72756a7172.png')" progressColor="#FFE94A" waveColor="#FFF")

    Container(size="small" margin="medium")

      p Aber auch die Gründer, die sie während ihrer Zeit im Start-Ups als Beraterin kennenlernte, inspirierten sie und brachten sie näher zur eigenen Gründung. Dabei spielte das Geschlecht keine Rolle.

    Container(v-if="mediaquery.s")
      AudioPlayer(file="/die-gruenderin/audio_05.mp3" :img="imagehosting_path(1600, 'f85537e500b1c80dbd922ee0dc67cebd.png')" progressColor="#FFE94A" waveColor="#FFF").uk-margin-medium-top.uk-margin-medium-bottom.uk-box-shadow-large.uk-padding-small
    template(v-else)
      AudioPlayer(file="/die-gruenderin/audio_05.mp3" :img="imagehosting_path(640, 'f85537e500b1c80dbd922ee0dc67cebd.png')" progressColor="#FFE94A" waveColor="#FFF")

    Container(size="small" margin="medium")

      p Angst vorm Scheitern hat Jessica Büttner nicht: „Klar, ich kenne die Zahlen. Die Möglichkeit, mit dieser Idee, mit diesem Start-Ups zu scheitern, ist relativ hoch. Damit müssen wir rechnen und das einkalkulieren. Aber selbst wenn, was kann denn passieren? Ich habe keine Verantwortung, keine Kinder, keine Schulden. Zu Gründen ist auch ein Investment in mich selbst. In mein Wissen. Diese Lernkurve mache ich nirgendwo sonst durch.“

      AudioPlayer(file="/die-gruenderin/audio_06.mp3" :img="imagehosting_path(1600, '5880f46d581559fe095ec0746f9543de.jpeg')" progressColor="#FFE94A" waveColor="#FFF" pos="right").uk-width-medium.uk-margin-small-top.uk-margin-medium-bottom

      p Ein bisschen zusätzliche Sicherheit braucht sie aber doch. Um vom Erfolg des Start-Ups finanziell unabhängig zu bleiben, hat Jessica einen Nebenerwerb: „Ich habe meine Ausgaben kalkuliert, überlegt welches Einkommen ich benötige, um diese zu decken und dann nach Nebenjobs gesucht. Da war ich echt nervös. Ich habe schlecht geschlafen, Stress gehabt. Ich war nachts wach und habe nach Stellen geschaut. Aber: Es hat alles innerhalb von vier Wochen geklappt.“ Auch ihre Familie und vor allem ihr Partner unterstützen sie: „Es ist entscheidend, dass der Partner hinter einem steht. Wenn man eine belastbare Beziehung hat, gibt das zusätzliche Sicherheit. Wenn ich ganz alleine wäre weiß ich nicht, ob ich gegründet hätte“.

      p Es läuft gut mit dem Start-Up ein halbes Jahr nach dem Start. Jessica Büttner reicht das nicht. Sie will ihre Erfahrungen weitergeben und andere Frauen so unterstützen, auch zu gründen. Das Vorbild sein, dass sie selber gern gehabt hätte.

    .uk-position-relative.uk-background-fixed(v-bind="about")
      Container(size="small" margin="medium").uk-padding-large
        .uk-text-center
          img(src="http://image.he-hosting.de/media/faeb5a6e2ad30920a22cbc4cb9619fd7.svg").uk-width-medium

        p Mit der Software werden die Ideen von Mitarbeitern und Kunden digitalisiert. Unternehmen erhalten ein intuitives Dashboard, um eingegangene Verbesserungsvorschläge zu verwalten, zu bearbeiten und auszuwerten. Ideengeber können ihre Vorschläge in wenigen Schritten per App oder Webbrowser einreichen und verfolgen. Mit idea-ly erhalten Unternehmen mehr Ideen, indem sie ihre Mitarbeiter digital und dezentral integrieren. Die Ideen selbst verbessern Prozesse und decken Einsparpotenziale auf.

    Container(v-if="mediaquery.s")
      img(:src="imagehosting_path(1600, '1a5ec6cd8b66b09f370ce41001c4eeb4.png')").uk-box-shadow-large.uk-padding-small

</template>

<script>
import { Chart } from 'highcharts-vue'

import imagehosting from '~/plugins/imagehosting.mixin'
import mediaquery from '~/plugins/mediaquery.mixin'

export default {

  components: { Chart },

  mixins: [
    imagehosting,
    mediaquery
  ],

  layout: 'article',

  computed: {
    moodImage () {
      return {
        style: {
          'background-image': 'url(http://image.he-hosting.de/media/e55738d0b74250a80984c200fe2147c3.png)',
          'background-position': 'center center',
          height: '66.666vh',
          'max-height': '66.666vw'
        }
      }
    },

    about () {
      return {
        style: {
          'background-image': 'url(http://image.he-hosting.de/media/e55738d0b74250a80984c200fe2147c3.png)',
          'background-position': 'center center'
        }
      }
    },

    chart () {
      return {
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Anteil von Gründerinnen und Gründern'
        },
        credits: {
          text: 'Quelle: Female Founders Monitor',
          href: 'https://femalefoundersmonitor.de/wp-content/uploads/FemaleFoundersMonitor2020.pdf'
        },
        series: [{
          name: '%-Anteil',
          data: [
            {
              name: 'Männer',
              y: 84.3,
              color: '#1E4456'
            },
            {
              name: 'Frauen',
              y: 15.7,
              color: '#FFE94A'
            }
          ]
        }]
      }
    }
  }
}
</script>
