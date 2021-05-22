var app = new Vue({ 
    el: '#app',
	data () {
	    return {
	      info: null,
          send: null,
          partner: null,
	      respuestas: null
	    }
	},
  	methods: {
        onSubmit(id) {
            console.log(id)
            console.log(this.respuestas)
            if (this.respuestas[id]) {
              var data = new FormData();
                  data.append('id', id);
                  data.append('respuesta', this.respuestas[id]);
                  vm = this
                axios.post('enviar.php', data)
                    .then(function (res) {
                        console.log(res)
                        if (res.data) {
                            alert("Respuesta guardada")
                            vm.send[id] = 1
                        }
                    })
                    .catch(function (err) {
                        console.log(err)
                    });
            } else {
                alert("Ingrese una respuesta") 
            } 
        }
    },
	async mounted () {
		//let aula = new URL(location.href).searchParams.get('aula') || '5A'
	    let aula = localStorage.aula
        console.log(localStorage.aula)
        await axios
	      .get('listar.php?aula='+aula)
	      .then(response => (
	      	this.info = response.data.alumnos
	      ))
        const respuestas = {}
        const send = {}
        const partner = {}
        for (const [key, item] of Object.entries(this.info)) {
            respuestas[item.id] = item.respuesta
            send[item.id] = item.respuesta ? 1 : 0
            partner[item.id] = this.info[+key+1]?this.info[+key+1]:this.info[0]
        }
        this.respuestas = respuestas
        console.log(respuestas)
        this.send = send
        this.partner = partner
        $(document).ready(function () {
            var macy = Macy({
                container: '#macy-container',
                trueOrder: true,
                waitForImages: false,
                margin: 16,
                columns: 3,
                breakAt: {
                    991: 1,
                }
            });
            $('.textarea').each(function () {
                autosize(this);
            }).on('autosize:resized', function () {
                macy.recalculate(true);
            });
        })
	}
});