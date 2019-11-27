import fecha from 'fecha'

const defaultConfig = {}
const defaultI18n = 'EN'
const availableMonths = {
  DA: [
    'Januar', 'Februar', 'Marts', 'April', 'Mai', 'Juni', 'Juli', 'August',
    'September', 'Oktober', 'November', 'December'
  ],
  DE: [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August',
    'September', 'Oktober', 'November', 'Dezember'
  ],
  EN: [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ],
  ES: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
    'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
  ET: [
    'Jaanuaril', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli',
    'August', 'September', 'Oktoober', 'November', 'Detsember'
  ],
  FI: [
    'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu',
    'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'
  ],
  FR: [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
    'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ],
  ID: [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli',
    'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ],
  IT: [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto',
    'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ],
  NL: [
    'Januari', 'Februaro', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus',
    'September', 'Oktober', 'November', 'December'
  ],
  PL: [
    'Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień',
    'Wrzesień', 'Październik', 'Listopad', 'Grudzień'
  ],
  PT: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ],
  RU: [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август',
    'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
  ]
}

const availableShortDays = {
  DA: ['Man', 'Tir', 'Ons', 'Tors', 'Fre', 'Lør', 'Søn'],
  DE: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
  EN: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  ES: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  ET: ['Esm', 'Tei', 'Kol', 'Nel', 'Ree', 'Lau', 'Püh'],
  FI: ['Ma', 'Ti', 'Ke', 'To', 'Per', 'Lau', 'Su'],
  FR: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
  ID: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
  IT: ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'],
  NL: ['maa', 'din', 'woe', 'don', 'vri', 'zat', 'zon'],
  PL: ['Pon', 'Wto', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd'],
  PT: ['2a', '3a', '4a', '5a', '6a', 'sá', 'do'],
  RU: ['ПО', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
}

const presetRangeLabel = {
  DA: {
    today: 'I dag',
    thisWeek: 'Denne uge',
    lastWeek: 'Sidste uge',
    thisMonth: 'denne måned',
    lastMonth: 'Sidste måned',
    lastSevenDays: 'Sidste 7 dage',
    lastThirtyDays: 'Sidste 30 dage',
    lastNinetyDays: 'Sidste 90 dage'
  },
  DE: {
    today: 'Heute',
    thisWeek: 'Diese Woche',
    lastWeek: 'Letzte Woche',
    thisMonth: 'Dieser Monat',
    lastMonth: 'Letzter Monat',
    lastSevenDays: 'Letzte 7 Tage',
    lastThirtyDays: 'Letzte 30 Tage',
    lastNinetyDays: 'Letzte 90 Tage'
  },
  EN: {
    today: 'Today',
    thisWeek: 'This week',
    lastWeek: 'Last week',
    thisMonth: 'This month',
    lastMonth: 'Last month',
    lastSevenDays: 'Last 7 days',
    lastThirtyDays: 'Last 30 days',
    lastNinetyDays: 'Last 90 days'
  },
  ES: {
    today: 'hoy',
    thisWeek: 'esta semana',
    lastWeek: 'semana pasada',
    thisMonth: 'mes en curso',
    lastMonth: 'mes pasado',
    lastSevenDays: 'últimos siete días',
    lastThirtyDays: 'últimos 30 días',
    lastNinetyDays: 'últimos 90 días'
  },
  ET: {
    today: 'Täna',
    thisWeek: 'See nädal',
    lastWeek: 'Eelmine nädal',
    thisMonth: 'See kuu',
    lastMonth: 'Eelmine kuu',
    lastSevenDays: 'Viimased 7 päeva',
    lastThirtyDays: 'Viimased 30 päeva',
    lastNinetyDays: 'Viimased 90 päeva'
  },
  FI: {
    today: 'Tänään',
    thisWeek: 'Tämä viikko',
    lastWeek: 'Viime viikko',
    thisMonth: 'Tässä kuussa',
    lastMonth: 'Viime kuukausi',
    lastSevenDays: 'Viimeiset 7 päivää',
    lastThirtyDays: 'Viimeiset 30 päivää',
    lastNinetyDays: 'Viimeiset 90 päivää'
  },
  FR: {
    today: 'Aujourd\'hui',
    thisWeek: 'Cette semaine',
    lastWeek: 'La semaine dernière',
    thisMonth: 'Ce mois',
    lastMonth: 'Le mois dernier',
    lastSevenDays: '7 derniers jours',
    lastThirtyDays: '30 derniers jours',
    lastNinetyDays: '90 derniers jours'
  },
  NL: {
    today: 'od dit moment',
    thisWeek: 'deze week',
    lastWeek: 'vorige week',
    thisMonth: 'deze maand',
    lastMonth: 'vorige maand',
    lastSevenDays: 'laatste zeven dagen',
    lastThirtyDays: 'laatste 30 dagen',
    lastNinetyDays: 'laatste 90 dagen'
  },
  PT: {
    today: 'hoje',
    thisWeek: 'esta semana',
    lastWeek: 'semana passada',
    thisMonth: 'este mês',
    lastMonth: 'mês passado',
    lastSevenDays: 'últimos sete dias',
    lastThirtyDays: 'últimos 30 dias',
    lastNinetyDays: 'últimos 90 dias '
  },
  IT: {
    today: 'oggigiorno',
    thisWeek: 'questa settimana',
    lastWeek: 'la settimana scorsa',
    thisMonth: 'questo mese',
    lastMonth: 'ultimo mese',
    lastSevenDays: 'ultimi sette giorni',
    lastThirtyDays: 'ultimi 30 giorni',
    lastNinetyDays: 'ultimi 90 giorni'
  },
  PL: {
    today: 'aktualnie',
    thisWeek: 'w tym tygodniu',
    lastWeek: 'w ostatnim tygodniu',
    thisMonth: 'ten miesiąc',
    lastMonth: 'ostatni miesiąc',
    lastSevenDays: 'ostatnie siódemka dni',
    lastThirtyDays: 'ostatnie 30 dni',
    lastNinetyDays: 'ostatnie 90 dni'
  },
  RU: {
    today: 'сегодня',
    thisWeek: 'эта неделя',
    lastWeek: 'прошлая неделя',
    thisMonth: 'этот месяц',
    lastMonth: 'последний месяц',
    lastSevenDays: 'последние семь дней',
    lastThirtyDays: 'последние 30 дней',
    lastNinetyDays: 'последние 90 дней'
  },
  ID: {
    today: 'Hari ini',
    thisWeek: '',
    lastWeek: '',
    thisMonth: 'Bulan ini',
    lastMonth: 'Bulan lalu',
    lastSevenDays: '7 Hari Terakhir',
    lastThirtyDays: '30 Hari Terakhir',
    lastNinetyDays: ''
  }
}

const defaultCaptions = {
  DA: {
    title: 'Vælg datoer',
    ok_button: 'Ansøge'
  },
  DE: {
    title: 'Datum auswählen',
    ok_button: 'Bestätigen'
  },
  EN: {
    title: 'Select Dates',
    ok_button: 'Apply'
  },
  ES: {
    title: 'seleccionar una fecha',
    ok_button: 'confirmar'
  },
  ET: {
    title: 'Valige Kuupäevad',
    ok_button: 'Kandideeri'
  },
  FI: {
    title: 'Valitse päivämäärät',
    ok_button: 'Käytä'
  },
  FR: {
    title: 'Choisir les dates',
    ok_button: 'Accepter'
  },
  RU: {
    title: 'Выберите дату',
    ok_button: 'подтверждать'
  },
  PL: {
    title: 'Wybierz datę',
    ok_button: 'potwierdzać'
  },
  IT: {
    title: 'Selezionare la data',
    ok_button: 'comprovare'
  },
  PT: {
    title: 'Selecione a data',
    ok_button: 'confirmar'
  },
  NL: {
    title: 'selecteer datum',
    ok_button: 'bevestigen'
  },
  ID: {
    title: 'Choose Dates',
    ok_button: 'Apply'
  }
}

const defaultStyle = {
  daysWeeks: 'calendar_weeks',
  days: 'calendar_days',
  daysSelected: 'calendar_days_selected',
  daysInRange: 'calendar_days_in-range',
  firstDate: 'calendar_month_left',
  secondDate: 'calendar_month_right',
  presetRanges: 'calendar_preset-ranges',
  dateDisabled: 'calendar_days--disabled'
}

const defaultPresets = function (i18n = defaultI18n) {
  return {
    thisWeek: function () {
      // get current date
      const n = new Date()

      // get current day of week eg.
      // sun => 0
      // mon => 1
      // thu => 2
      // wed => 3
      // ...
      const dayOfWeek = n.getDay()

      // get current day of month => 18 if current date 18.07.2018
      const dayOfMonth = n.getDate()

      // if today is wednesday 18.07.2018, we need to go back 2 days to get
      // monday 16.07.2018.
      // - dayOfMonth => 18
      // - dayOfWeek => 2
      // - diff => 16
      //
      // if current day is a sunday, dayOfWeek returns 0 and we need to go back 6 days
      const diff = dayOfMonth - dayOfWeek + (dayOfWeek === 0 ? -6 : 1)

      // set new date with day of month set to diff
      const startOfWeek = new Date(n.getFullYear(), n.getMonth(), diff + 1)
      const endOfWeek = new Date(new Date(startOfWeek).setDate(startOfWeek.getDate() + 6))

      return {
        label: presetRangeLabel[i18n].thisWeek,
        active: false,
        dateRange: {
          start: startOfWeek,
          end: endOfWeek
        }
      }
    },
    lastWeek: function () {
      const n = new Date()
      const dayOfWeek = n.getDay()
      const dayOfMonth = n.getDate()
      const diff = dayOfMonth - dayOfWeek + (dayOfWeek === 0 ? -6 : 1) - 7
      const startOfWeek = new Date(n.getFullYear(), n.getMonth(), diff + 1)
      const endOfWeek = new Date(new Date(startOfWeek).setDate(startOfWeek.getDate() + 6))
      return {
        label: presetRangeLabel[i18n].lastWeek,
        active: false,
        dateRange: {
          start: startOfWeek,
          end: endOfWeek
        }
      }
    },
    last30days: function () {
      const n = new Date()
      const start = new Date(n.getFullYear(), n.getMonth(), n.getDate() - 29)
      const end = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1)
      return {
        label: presetRangeLabel[i18n].lastThirtyDays,
        active: false,
        dateRange: {
          start: start,
          end: end
        }
      }
    },
    last90days: function () {
      const n = new Date()
      const start = new Date(n.getFullYear(), n.getMonth(), n.getDate() - 89)
      const end = new Date(n.getFullYear(), n.getMonth(), n.getDate() + 1)
      return {
        label: presetRangeLabel[i18n].lastNinetyDays,
        active: false,
        dateRange: {
          start: start,
          end: end
        }
      }
    }
  }
}

export default {
  name: 'vue-rangedate-picker',
  props: {
    configs: {
      type: Object,
      default: () => defaultConfig
    },
    i18n: {
      type: String,
      default: defaultI18n
    },
    months: {
      type: Array,
      default: () => null
    },
    shortDays: {
      type: Array,
      default: () => null
    },
    // options for captions are: title, ok_button
    captions: {
      type: Object,
      default: () => null
    },
    format: {
      type: String,
      default: 'DD MMM YYYY'
    },
    styles: {
      type: Object,
      default: () => {}
    },
    initRange: {
      type: Object,
      default: () => null
    },
    startActiveMonth: {
      type: Number,
      default: new Date().getMonth()
    },
    startActiveYear: {
      type: Number,
      default: new Date().getFullYear()
    },
    presetRanges: {
      type: Object,
      default: () => null
    },
    compact: {
      type: String,
      default: 'false'
    },
    righttoleft: {
      type: String,
      default: 'false'
    }
  },
  data () {
    return {
      dateRange: {},
      numOfDays: 7,
      isFirstChoice: true,
      isOpen: false,
      presetActive: '',
      showMonth: false,
      activeMonthStart: this.startActiveMonth,
      activeYearStart: this.startActiveYear,
      activeYearEnd: this.startActiveYear
    }
  },
  created () {
    if (this.isCompact) {
      this.isOpen = true
    }
    if (this.activeMonthStart === 11) this.activeYearEnd = this.activeYearStart + 1
    this.dateRange = {
      start: new Date(this.initRange.start),
      end: new Date(this.initRange.end)
    }
  },
  watch: {
    startNextActiveMonth: function (value) {
      if (value === 0) this.activeYearEnd = this.activeYearStart + 1
    }
  },
  computed: {
    monthsLocale: function () {
      return this.months || availableMonths[this.i18n]
    },
    shortDaysLocale: function () {
      return this.shortDays || availableShortDays[this.i18n]
    },
    captionsLocale: function () {
      return this.captions || defaultCaptions[this.i18n]
    },
    s: function () {
      return Object.assign({}, defaultStyle, this.style)
    },
    startMonthDay: function () {
      return new Date(this.activeYearStart, this.activeMonthStart, 1).getDay()
    },
    startNextMonthDay: function () {
      return new Date(this.activeYearEnd, this.startNextActiveMonth, 1).getDay()
    },
    endMonthDate: function () {
      return new Date(this.activeYearEnd, this.startNextActiveMonth, 0).getDate()
    },
    endNextMonthDate: function () {
      return new Date(this.activeYearEnd, this.activeMonthStart + 2, 0).getDate()
    },
    startNextActiveMonth: function () {
      return this.activeMonthStart >= 11 ? 0 : this.activeMonthStart + 1
    },
    finalPresetRanges: function () {
      const tmp = {}
      const presets = this.presetRanges || defaultPresets(this.i18n)
      for (const i in presets) {
        const item = presets[i]
        let plainItem = item
        if (typeof item === 'function') {
          plainItem = item()
        }
        tmp[i] = plainItem
      }
      return tmp
    },
    isCompact: function () {
      return this.compact === 'true'
    },
    isRighttoLeft: function () {
      return this.righttoleft === 'true'
    }
  },
  methods: {
    toggleCalendar: function () {
      if (this.isCompact) {
        this.showMonth = !this.showMonth
        return
      }
      this.isOpen = !this.isOpen
      this.showMonth = !this.showMonth
      return
    },
    getDateString: function (date, format = this.format) {
      if (!date) {
        return null
      }
      const dateparse = new Date(Date.parse(date))


      // why -1 ?
      return fecha.format(new Date(dateparse.getFullYear(), dateparse.getMonth(), dateparse.getDate() - 1), format)
    },
    getDayIndexInMonth: function (r, i, startMonthDay) {
      const date = (this.numOfDays * (r - 1)) + i

      const startingDay = startMonthDay - 1 === -1 ? 6 : startMonthDay - 1

      return date - startingDay
    },
    getDayCell (r, i, startMonthDay, endMonthDate) {
      const result = this.getDayIndexInMonth(r, i, startMonthDay)
      // bound by > 0 and < last day of month
      return result > 0 && result <= endMonthDate ? result : '&nbsp;'
    },
    getNewDateRange (result, activeMonth, activeYear) {
      const newData = {}
      let key = 'start'
      if (!this.isFirstChoice) {
        key = 'end'
      } else {
        newData['end'] = null
      }
      const resultDate = new Date(activeYear, activeMonth, result)
      if (!this.isFirstChoice && resultDate < this.dateRange.start) {
        this.isFirstChoice = false
        return { start: resultDate }
      }

      // toggle first choice
      this.isFirstChoice = !this.isFirstChoice
      newData[key] = resultDate
      return newData
    },
    selectFirstItem (r, i) {
      const result = this.getDayIndexInMonth(r, i, this.startMonthDay) + 1
      this.dateRange = Object.assign({}, this.dateRange, this.getNewDateRange(result, this.activeMonthStart,
      this.activeYearStart))
      if (this.dateRange.start && this.dateRange.end) {
        this.presetActive = ''
        if (this.isCompact) {
          this.showMonth = false
        }
      }
    },
    selectSecondItem (r, i) {
      const result = this.getDayIndexInMonth(r, i, this.startNextMonthDay) + 1
      this.dateRange = Object.assign({}, this.dateRange, this.getNewDateRange(result, this.startNextActiveMonth,
      this.activeYearEnd))
      if (this.dateRange.start && this.dateRange.end) {
        this.presetActive = ''
      }
    },
    isDateSelected (r, i, key, startMonthDay, endMonthDate) {
      const result = this.getDayIndexInMonth(r, i, startMonthDay) + 1

      if (result < 2 || result > endMonthDate + 1) return false

      let currDate = null
      if (key === 'first') {
        currDate = new Date(this.activeYearStart, this.activeMonthStart, result)
      } else {
        currDate = new Date(this.activeYearEnd, this.startNextActiveMonth, result)
      }
      return (this.dateRange.start && this.dateRange.start.getTime() === currDate.getTime()) ||
        (this.dateRange.end && this.dateRange.end.getTime() === currDate.getTime())
    },
    isDateInRange (r, i, key, startMonthDay, endMonthDate) {
      const result = this.getDayIndexInMonth(r, i, startMonthDay) + 1
      if (result < 2 || result > endMonthDate + 1) return false

      let currDate = null
      if (key === 'first') {
        currDate = new Date(this.activeYearStart, this.activeMonthStart, result)
      } else {
        currDate = new Date(this.activeYearEnd, this.startNextActiveMonth, result)
      }
      return (this.dateRange.start && this.dateRange.start.getTime() < currDate.getTime()) &&
        (this.dateRange.end && this.dateRange.end.getTime() > currDate.getTime())
    },
    isDateDisabled (r, i, startMonthDay, endMonthDate) {
      const result = this.getDayIndexInMonth(r, i, startMonthDay)
      // bound by > 0 and < last day of month
      return !(result > 0 && result <= endMonthDate)
    },
    goPrevMonth () {
      const prevMonth = new Date(this.activeYearStart, this.activeMonthStart, 0)
      this.activeMonthStart = prevMonth.getMonth()
      this.activeYearStart = prevMonth.getFullYear()
      this.activeYearEnd = prevMonth.getFullYear()
    },
    goNextMonth () {
      const nextMonth = new Date(this.activeYearEnd, this.startNextActiveMonth, 1)
      this.activeMonthStart = nextMonth.getMonth()
      this.activeYearStart = nextMonth.getFullYear()
      this.activeYearEnd = nextMonth.getFullYear()
    },
    updatePreset (item) {
      this.presetActive = item.label
      this.dateRange = item.dateRange
      // update start active month
      this.activeMonthStart = this.dateRange.start.getMonth()
      this.activeYearStart = this.dateRange.start.getFullYear()
      this.activeYearEnd = this.dateRange.end.getFullYear()
    },
    setDateValue: function () {
      this.$emit('selected', this.dateRange)
      if (!this.isCompact) {
        this.toggleCalendar()
      }
    }
  }
}
