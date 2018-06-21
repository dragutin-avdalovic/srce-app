<script>
import axios from 'axios'
const api = 'http://45.76.90.178:3000/api/v1'

export default {
  data () {
    return {
      errors: [],
      volunteers: `${api}/volunteers/`,
      socialCard: `${api}/social-card/`,
      donations: `${api}/donations/`,
      accessCard: `${api}/access-card/`
    }
  },
  methods: {
    // formatDate: function (value) {
    //     if (value) {
    //         return moment(String(value)).format('dddd, MMMM Do YYYY, h:mm:ss a')
    //     }
    // },
    getModule (route, cb) {
      axios.get(route).then(response => {
        cb(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    postModule (route, data, cb) {
      axios.post(route, data).then(response => {
        cb(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    putModule (route, data, cb) {
      axios.put(route, data).then(response => {
        cb(response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    deleteModule (route, cb) {
      axios.delete(route).then(response => {
        cb(response.data)
      }).catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
