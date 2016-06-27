$(document).ready(function(){

    var a = $("#contactform");
        a.submit(function (b) {
            b.preventDefault(), $.ajax({
                url: "http://formspree.io/faleconosco@lemobs.com.br",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json",
                beforeSend: function () {
                    $(".errorMessage").remove();
                    var a = $('<i id="spinIcon" class="fa fa-refresh fa-spin"></i> <span>Enviando...</span>');
                    $("#sendMessage").text(""), $("#sendMessage").append(a), $(".progressForm").show()
                },
                success: function (b) {
                    a.find(".alert--loading").hide(), $("#contactModal").modal("hide"), $(".progressForm").hide(), $("#sendMessage").text("Enviar Mensagem");
                    var c = $("#contactform").find("#name").val();
                    $("#thanksModal").find(".modal-title").text("Muito obrigado, " + c + "!"), $("#thanksModal").modal("show")
                },
                error: function (b) {
                    $(".progressForm").hide(), $("#sendMessage").text("Enviar Mensagem"), a.append('<div class="well errorMessage">Ops, tivemos um erro. Iremos resolvê-lo o mais rápido possível. Enquanto isso você pode esperar um pouco e tentar enviar novamente a mensagem ou entrar em contato conosco via telefone.<p style="text-align: center; margin: 15px;font-size: x-large; color: #716C63;"><strong><i class="fa fa-phone-square"></i><a href="tel:+552137334163" class="noDecoration" style="padding: 5px;">+55 21 3733-4163</a></strong></p><p>Desculpe o inconveniente.</p></div>')
                }
            })
        }), $("#contactModal").on("hidden.bs.modal", function () {
            $(".errorMessage").remove()
        })
        
        $(window).scroll(function() {
           var hT = $('.modalTrigger').offset().top,
               hH = $('.modalTrigger').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if ( (wS > (hT+hH-wH) ) && !$(".modalTrigger").hasClass("trigged")){
             $('#ebookModal').modal('show');
             $('.modalTrigger').addClass('trigged');
               
           }
        });
        

});
