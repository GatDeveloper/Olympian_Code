//botão começar
const comecar = document.querySelector('#comecar');

//contents

const telaInicial = document.querySelector('#telaInicial');
const escolherDesafio = document.querySelector('#escolherDesafio');
const desafio = document.querySelector('#desafio');

//Dicionário de titulos e desafios

const htmlTitulo = ['Cabeçalho (Header)', 'Banner Principal (Hero Section)', 'Sobre Nós (About Us)', 'Depoimentos (Testimonials)', 'Serviços (Services)', 'Produtos em Destaque (Featured Products)', 'Blog em Destaque (Featured Blog Posts)', 'Chamada para Ação (Call to Action)', 'Galeria de Imagens (Image Gallery)', 'Vídeo Promocional (Promo Video)', 'Equipa (Team)', 'Parceiros (Partners)', 'Testemunhos em Vídeo (Video Testimonials)', 'Caso de Sucesso (Case Study)', 'Infográfico (Infographic)', 'Mapa (Map)', 'Seção de Contato (Contact Section)', 'Perguntas Frequentes (FAQ)', 'Ofertas Especiais (Special Offers)', 'Feed de Redes Sociais (Social Media Feed)', 'Newsletter (Newsletter Signup)', 'Certificações (Certifications)', 'Comentários Recentes (Recent Comments)', 'Rodapé (Footer)', 'Eventos Futuros', 'Recursos', 'Política de Cookies', 'História da Empresa', 'Apoio ao Cliente', 'Ações de Responsabilidade Social', 'Certificações de Segurança', 'Perfil do Usuário'];

var  html = ['Incluir o logotipo da empresa no cabeçalho do site, juntamente com um menu de navegação horizontal que contemple links para as principais seções do site, como "Home", "Sobre Nós", "Serviços" e "Contato". Também incluir informações de contato, como telefone e e-mail, e ícones de redes sociais para facilitar o acesso às páginas da empresa.',

    'O Banner Principal deve exibir uma imagem ou vídeo de destaque em alta resolução, acompanhado por uma chamada para ação (CTA) impactante e um texto de apresentação que resuma a proposta ou o valor da empresa.',
    
    'Sobre Nós deve oferecer uma visão geral da empresa, incluindo sua história, missão, valores e fotos da equipe. Apresentar essas informações de maneira clara e envolvente, com uma combinação de texto e imagens.',
    
    'Depoimentos deve apresentar comentários e avaliações de clientes satisfeitos, incluindo citações diretas e, quando possível, fotos ou vídeos dos clientes para dar mais credibilidade.',
    
    'Serviços deve listar os serviços oferecidos pela empresa, cada um com uma breve descrição, ícones ou imagens representativas e links para mais informações ou páginas dedicadas.',
    
    'O Banner Principal deve exibir uma imagem ou vídeo de destaque, acompanhado por uma chamada para ação (CTA) clara e um texto de apresentação que destaque a proposta principal da empresa.',
    
    'Blog em Destaque deve exibir os artigos mais recentes ou populares do blog, com títulos chamativos, trechos do conteúdo e imagens que representem o tema de cada postagem.',
    
    'Chamada para Ação (CTA) deve incentivar ações específicas dos usuários, como se inscrever na newsletter, comprar um produto ou entrar em contato, utilizando texto persuasivo e botões de destaque.',
    
    'A Galeria de Imagens deve apresentar uma coleção de fotos organizadas em categorias, com legendas descritivas e a opção de visualização em tela cheia para melhor experiência do usuário.',
    
    'O Vídeo Promocional deve exibir um vídeo atrativo que promova os serviços ou produtos da empresa, com título, descrição e botões de reprodução visíveis.',
    
    'Equipe deve mostrar fotos e perfis dos membros da equipe, incluindo biografias curtas e links para seus perfis profissionais em plataformas como LinkedIn.',
    
    'Parceiros deve destacar os logotipos e descrições dos parceiros estratégicos da empresa, com links para os seus sites e, se relevante, breves avaliações sobre a parceria.',
    
    'Testemunhos em Vídeo deve apresentar vídeos de clientes relatando suas experiências com a empresa, acompanhados de nomes e fotos dos clientes para dar mais autenticidade.',
    
    'Casos de Sucesso deve descrever projetos bem-sucedidos realizados pela empresa, incluindo os desafios enfrentados, as soluções implementadas e os resultados obtidos.',
    
    'Infográfico deve resumir dados ou informações importantes de forma visualmente atraente, utilizando gráficos, ícones e cores para facilitar a compreensão.',
    
    'O Mapa interativo deve mostrar a localização da empresa no Google Maps ou similar, com a opção de traçar rotas para facilitar a chegada dos visitantes.',
    
    'Seção de Contato deve incluir um formulário para envio de mensagens, o endereço físico da empresa, número de telefone e e-mail de contato, além de links para redes sociais.',
    
    'Perguntas Frequentes (FAQ) deve responder às dúvidas comuns dos clientes, apresentando perguntas e respostas de forma clara e organizada por categorias, se necessário.',
    
    'Ofertas Especiais deve destacar promoções atuais da empresa, incluindo descrições dos produtos ou serviços em oferta, imagens ilustrativas e, se aplicável, códigos de desconto.',
    
    'O Feed de Redes Sociais deve exibir as postagens mais recentes das redes sociais da empresa, permitindo que os usuários vejam as atualizações diretamente no site.',
    
    'Newsletter deve oferecer um formulário de inscrição para que os visitantes possam se cadastrar, apresentando benefícios da inscrição e exemplos de conteúdos anteriores.',
    
    'Certificações deve mostrar as certificações obtidas pela empresa, com imagens dos certificados, descrições e logos das entidades certificadoras.',
    
    'Comentários Recentes deve exibir o feedback mais recente de clientes, incluindo nomes, fotos e, se aplicável, respostas da empresa para dar transparência e confiança.',
    
    'O Rodapé deve conter links para páginas importantes como Termos de Uso, Política de Privacidade, além de informações de copyright e ícones de redes sociais.',
    
    'Lista de próximos eventos deve incluir as datas, descrições dos eventos futuros e links para mais informações ou inscrições, se disponíveis.',
    
    'Biblioteca deve conter materiais para download, como e-books, whitepapers, guias e tutoriais, organizados por categorias para facilitar o acesso.',
    
    'Explicação sobre como os cookies são usados no site deve informar o usuário sobre a política de cookies e oferecer opções para gerenciar suas preferências de navegação.',
    
    'Seção detalhada sobre a evolução e marcos importantes da empresa deve destacar a trajetória da empresa, com datas e eventos significativos ilustrados por textos e imagens.',
    
    'Links para suporte técnico deve incluir opções de contato como chat ao vivo, e-mail e telefone, para que os usuários possam resolver problemas ou tirar dúvidas rapidamente.',
    
    'Informações sobre projetos e iniciativas de responsabilidade social e ambiental da empresa devem destacar as ações e compromissos da empresa em prol da sociedade e do meio ambiente.',
    
    'Informações sobre certificações e medidas de segurança adotadas pelo site devem explicar as políticas de segurança e privacidade implementadas para proteger os dados dos usuários.',
    
    'Área onde os usuários podem gerenciar suas informações pessoais e preferências deve permitir que os usuários acessem e modifiquem seus dados pessoais e preferências de uso do site.'];

const cssTitulo = ['Menu Fixo no Topo', 'Alinhamento de Itens em Linha', 'Espaçamento em Botões', 'Tipografia para Títulos e Texto', 'Fundo com Imagem e Cor', 'Borda em Caixas', 'Efeito de Cor em Botões', 'Layout de Colunas e Linhas', 'Efeito de Aparição e Desaparecimento', 'Gradiente de Cor no Fundo', 'Layout Responsivo para Dispositivos Móveis', 'Efeito de Profundidade em Caixas de Conteúdo', 'Destaque em Texto com Interação', 'Layout em Grade para Conteúdo', 'Estilização de Campos de Formulário', 'Efeito de Movimento em Interação', 'Estilo Dinâmico de Links', 'Efeito de Sobreposição em Caixa de Conteúdo', 'Lista de Ícones Representativos', 'Estilização de Tabelas', 'Animação em Resposta a Ação', 'Efeito de Hover em Imagens', 'Efeito de Hover em Imagens', 'Efeito de Zoom em Galerias de Imagens'];

var css = ['Organize o layout da página para que o menu de navegação fique fixo no topo enquanto o usuário rola a página para baixo.', 'Crie uma seção com itens alinhados em uma linha que se ajustam automaticamente para preencher o espaço disponível mantendo um espaçamento uniforme.', 'Ajuste o espaçamento interno e externo ao redor dos botões para destacá-los e torná-los facilmente clicáveis.', 'Escolha fontes distintas para os títulos e o corpo do texto destacando os títulos e garantindo a legibilidade.', 'Aplique uma cor de fundo sólida e adicione uma imagem de fundo em uma seção específica para diferenciá-la visualmente.', 'Adicione uma borda ao redor das caixas, ajustando o estilo da borda para combinar com o design geral da página.', 'Inclua um efeito visual em um botão que muda suavemente de cor quando o usuário passa o mouse sobre ele.', 'Desenvolva um layout estruturado em colunas e linhas ajustando automaticamente o tamanho das colunas conforme a largura da tela muda.', 'Aplique um efeito visual que faz com que o texto e as imagens dentro de uma seção apareçam e desapareçam suavemente com a interação do usuário.', 'Use uma imagem de fundo com uma transição suave de cor para criar um efeito visual atraente.', 'Crie um layout onde os elementos se reordenam e redimensionam para se ajustarem bem em diferentes tamanhos de tela garantindo uma boa experiência em dispositivos móveis.', 'Estilize uma caixa de conteúdo para que pareça estar levantada em relação ao fundo da página, utilizando efeitos de sombra.', 'Adicione um efeito de destaque ao texto quando o usuário clica ou passa o mouse sobre um elemento específico.', 'Organize o conteúdo em uma estrutura de grade permitindo uma visualização proporcional e organizada dos elementos.', 'Crie um formulário com campos de entrada e botões estilizados de forma consistente e atraente para facilitar a interação do usuário.', 'Desenvolva um efeito visual que faz com que o conteúdo se mova ou mude de forma em resposta a ações do usuário como rolar ou clicar. Ex: Efeito parallax', 'Ajuste o estilo dos links para que mudem de aparência quando o usuário passa o mouse sobre eles e aos que já visitou.', 'Projete uma área onde o conteúdo é exibido em uma caixa que parece flutuar acima do fundo da página com efeitos de sombra e borda.', 'Adicione uma lista de ícones para representar diferentes categorias ou características garantindo que os ícones sejam de tamanhos e estilos consistentes.', 'Ajuste a aparência de tabelas para que as linhas e colunas sejam claramente visíveis e organizadas com bordas e espaçamento bem definidos.', 'Desenvolva uma animação para um elemento que reage a ações do usuário como clicar em um botão.', 'Adicione um efeito visual em imagens que aumenta sua opacidade ou aplica uma sombra quando o usuário passa o mouse sobre elas.', 'Adicione um efeito visual em imagens que aumenta sua opacidade ou aplica uma sombra quando o usuário passa o mouse sobre elas.', 'Adicione um efeito de zoom em uma galeria de imagens que aumenta a imagem quando o usuário passa o mouse sobre ela.'];

const jsTitulo = ['Menu de Navegação Responsivo', 'Exibição de Modal ao Clicar em Botão', 'Carrossel de Imagens', 'Formulário de Validação em Tempo Real', 'Scroll Suave para Âncoras', 'Accordion Interativo', 'Efeito de Animação em Rolagem', 'Contador Regressivo', 'Sistema de Filtro de Produtos', 'Popup de Boas-Vindas', 'Sistema de Avaliação com Estrelas', 'Alternância de Temas Claro/Escuro', 'Carrossel de Testemunhos', 'Desbloqueio de Conteúdo ao Rolamento', 'Acesso Condicional com Login', 'Interatividade com Elementos de Página', 'Animação de Texto ao Carregar a Página'];

const js= ['Adicione um menu de navegação que se expande e contrai quando o usuário clica em um botão de hambúrguer adaptando-se a diferentes tamanhos de tela.','Crie um modal que aparece quando o usuário clica em um botão e pode ser fechado com um botão de fechar ou ao clicar fora do modal.','Desenvolva um carrossel de imagens que permite aos usuários navegar entre diferentes imagens usando setas de navegação ou indicadores de página.','Implemente validação em tempo real em um formulário para verificar a validade dos campos enquanto o usuário preenche o formulário e exibir mensagens de erro.','Adicione um efeito de rolagem suave quando o usuário clica em um link de âncora levando-o suavemente para a seção correspondente da página.','Crie um painel de acordeão onde cada seção pode ser expandida ou contraída ao clicar revelando ou ocultando conteúdo adicional.','Adicione animações que são ativadas quando o usuário rola a página para uma determinada seção como efeitos de desvanecimento ou deslizar.','Implemente um contador regressivo que conta o tempo restante para um evento ou oferta especial atualizando o tempo em tempo real.','Adicione um sistema de filtro que permite aos usuários selecionar diferentes opções para filtrar uma lista de produtos ou itens exibidos na página.','Exiba um popup de boas-vindas quando um usuário visita a página pela primeira vez ou após um certo período de tempo com a opção de fechar.','Crie um sistema de avaliação com estrelas onde os usuários podem clicar para avaliar um produto ou serviço com feedback visual das estrelas selecionadas.','Implemente um botão que permite aos usuários alternar entre temas claro e escuro ajustando o estilo da página conforme a escolha.','Desenvolva um carousel de testemunhos que apresenta um depoimento de cada vez e permite navegar entre diferentes depoimentos com setas de navegação.','Adicione um efeito onde o conteúdo adicional é revelado conforme o usuário rola para baixo na página proporcionando uma experiência de leitura contínua.','Desenvolva um sistema que permite aos usuários acessar certas partes do site somente após fazer login com redirecionamento e mensagens de erro apropriadas.','Adicione interatividade a elementos da página, como mostrar ou ocultar informações adicionais quando o usuário clica em um botão ou imagem.','Crie uma animação para o texto que aparece na página quando o usuário carrega a página como um efeito de desvanecimento ou deslizamento.'];
    

 

const bugTitulo = ['Perca de tempo', 'Sem teclado', 'Editor Neolítico', 'Demissão celestial', 'Grupo dividido', 'Vendo pelos ouvidos', 'Burnout: mais é sempre bom', 'Burnout: inspiração do nada', 'Editor paleolítico', 'Sem mãos', 'Sem falar', 'Alfazar', 'Escrita in line', 'Quebra de redação', 'Burnout: grupo desfeito', 'Burnout: perfeccionismo no wireframe', 'Acho que tá exagerado', 'Eu escolho o layout', 'Eu escolho o layout', 'Eu escolho o layout', 'Erro amigo', 'Burnout: Desfazer o desfeito', 'Isso é um Crime', 'Burnout: Esqueça seu desafio', 'Burnout: pegue outro desafio'];

const bug = ['Tempo reduzido em 10 minutos', 'Utilize o teclado virtual até o próximo desafio.', 'Desenvolva os códigos no bloco de notas.', 'Tire um <a href="https://g.co/kgs/sQfre3N" target="_blank">D20</a>, cada membro da equipe escolhe um intervalo de números e o que ganhar irá para outro grupo.', 'O grupo se divide em dois e seguem separado os desafios.', 'Utilize o narrador do Windows por 20 minutos de desafio sem enxergar.', 'Faça duas vezes de formas diferentes seu desafio.', 'Cada membro da equipe deve buscar uma folha de árvore.', 'Escreva seu código no papel.', 'Não pode utilizar as mãos para tocar em hardware.', 'O grupo não pode se comunicar pela fala.', 'Tire um <a href="https://g.co/kgs/sQfre3N" target="_blank">D20</a>, o número que sair corresponde a uma letra do alfabeto que não pode estar no seu código.', 'Não pode conter quebra de linha nos seus próximos códigos.', 'Toda vez que necessitar quebrar linha, faça 10x.', 'Cada um por si nesse desafio.', 'Faça 3 modelos a mais de wireframe.', 'Todos os textos começam com tamanhos de 200px.', 'Layout que usa uma paleta de cores neon brilhantes e texto em Comic Sans', 'Um fundo cheio de imagens chamativas e animadas com texto muito pequeno', 'Fontes góticas antigas, aplicar bordas grossas a todos os elementos e sombras pesadas ao texto', 'Peça a algum outro grupo provocar um erro no seu código sem seu grupo saber.', 'Aperte ctrl+z 10 vezes e prossiga o código a partir daí.', 'Troque o tema do Visual Studio para branco.', 'Seu desafio agora é pensar num layout para o site: https://www.pudim.com.br/', 'Pegue mais uma carta de desafio.'];


const patchTitulo = ['prompt ao Chat GPT', '1 pergunta ao Chat GPT', '2 perguntas ao Chat GPT', 'Contrato sequestro', 'Muda desafio', '1 pergunta ao professor', '2 perguntas ao professor', 'Mais tempo', 'Frameworks', 'Estilo Perfeito', 'Estilo Perfeito 2', 'Troca elemento', 'Reduz quantidade', 'Lembrete Semântica (estruturais)', 'Lembrete Acessibilidade (atributos)', 'Ajuda', 'Outra Ajuda', 'Problema seu', 'Anula Burnout', 'Anula Burnout', 'Anula burnout amigo', 'Descanso celestial', 'Você escolhe o desafio', 'Continue um desafio', 'Continue um desafio', 'Metade do desafio'];

const patch = ['Permite fazer um único prompt ao ChatGPT.', 'Permite fazer uma pergunta ao ChatGPT.', 'Permite fazer duas perguntas ao ChatGPT.', 'Permite contratar um membro de outra equipe para ajudar na sua equipe.', 'Permite trocar opcionalmente o desafio atual por outro.', 'Permite fazer uma pergunta ao professor.', 'Permite fazer duas perguntas ao professor.', 'Adiciona 5 minutos de tempo extra para completar o desafio.', 'Permite o uso de frameworks durante o desafio.', 'Permite ajustar 1 regra de layout ou estilo ao seu gosto.', 'Permite ajustar 2 regras de layout ou estilo ao seu gosto.', 'Permite escolher outro elemento no desafio.', 'Diminui a quantidade de elementos necessários no desafio, não pode ser usado se houver apenas um elemento.', '<header><nav><section><article><aside><footer><main><figure><figcaption><time>', 'alt. aria-label. aria-labelledby. aria-describedby.aria-live. aria-role. aria-hidden. tabindex. role. title.', 'Correção de um erro pequeno por parte do docente.', 'Correção de um erro pequeno por outro grupo.', 'Correção de um erro por outro grupo.', 'Tire um Burnout', 'Tire um Burnout', 'Tire um burnout de outra equipe', 'Tire um <a href="https://g.co/kgs/sQfre3N" target="_blank">D20</a>, cada membro da equipe escolhe um intervalo de números e o que ganhar irá descansar até o próximo desafio.', 'Decida o que a equipe deverá fazer como desafio', 'Use esta carta para quando não der tempo de terminar um desafio.', 'Use esta carta para quando não der tempo de terminar um desafio.', 'Reduza o desafio a metade do que é preciso'];


//botoes html, css, js e voltar 

const btnHtml = document.querySelector('#btnHtml');
const btnCss = document.querySelector('#css');
const btnJs = document.querySelector('#javascript');
const btnVoltar = document.querySelector('#voltar');
const btnRecarregar = document.querySelector('#recarregar');
const btnRodape = document.querySelector('#rodape');



//troca de sections

comecar.addEventListener('click', ()=>{
    telaInicial.style.display = 'none';
    escolherDesafio.style.display = 'block';
});

function desafioHtml(){
    escolherDesafio.style.display = 'none';
    desafio.style.display = 'block';

    let aleatorio = Math.floor(Math.random()*32);
    let divdesafio = document.querySelector('#divdesafio');
    let complemento = document.querySelector('#complemento');

    divdesafio.innerHTML =`<img src="midias/img/logoHtml.png" alt="logo do html" width="200px"><h1> ${htmlTitulo[aleatorio]} </h1><h2>${html[aleatorio]}</h2>`;

    aleatorio = Math.random();
    complemento.className = '';

    if(aleatorio > 0.5 ){
        let aleatorio = Math.floor(Math.random()*25);
        complemento.innerHTML = `<img src="midias/img/logoBug.png" width="200px"><h1> ${bugTitulo[aleatorio]} </h1><h2>${bug[aleatorio]}</h2>`;
        complemento.classList.add('Bug');;
    }else{
        let aleatorio = Math.floor(Math.random()*25);
        complemento.innerHTML = `<img src="midias/img/logoPatch.png" width="200px"><h1> ${patchTitulo[aleatorio]} </h1><h2>${patch[aleatorio]}</h2>`;
        complemento.classList.add('Patch');
    }

    btnRecarregar.addEventListener('click', desafioHtml);

}

function desafioCss(){
    escolherDesafio.style.display = 'none';
    desafio.style.display = 'block';

    let aleatorio = Math.floor(Math.random()*24);
    let divdesafio = document.querySelector('#divdesafio');
    let complemento = document.querySelector('#complemento');

    divdesafio.innerHTML =`<img src="midias/img/logoCss.png" alt="logo do CSS" width="200px"><h1> ${cssTitulo[aleatorio]} </h1><h2>${css[aleatorio]}</h2>`;

    aleatorio = Math.random();
    complemento.className = '';

    if(aleatorio > 0.5 ){
        let aleatorio = Math.floor(Math.random()*25);
        complemento.innerHTML = `<img src="midias/img/logoBug.png" width="200px"><h1> ${bugTitulo[aleatorio]} </h1><h2>${bug[aleatorio]}</h2>`;
        complemento.classList.add('Bug');;
    }else{
        let aleatorio = Math.floor(Math.random()*25);
        complemento.innerHTML = `<img src="midias/img/logoPatch.png" width="200px"><h1> ${patchTitulo[aleatorio]} </h1><h2>${patch[aleatorio]}</h2>`;
        complemento.classList.add('Patch');
    }

    btnRecarregar.addEventListener('click', desafioCss);


}

function desafioJs(){
    escolherDesafio.style.display = 'none';
    desafio.style.display = 'block';

    let aleatorio = Math.floor(Math.random()*17);
    let divdesafio = document.querySelector('#divdesafio');
    let complemento = document.querySelector('#complemento');

    divdesafio.innerHTML =`<img src="midias/img/logoJavascript.png" alt="logo do JavaScript" width="200px"><h1> ${jsTitulo[aleatorio]} </h1><h2>${js[aleatorio]}</h2>`;

    aleatorio = Math.random();
    complemento.className = '';

    if(aleatorio > 0.5 ){
        let aleatorio = Math.floor(Math.random()*25);
        complemento.innerHTML = `<img src="midias/img/logoBug.png" width="200px"><h1> ${bugTitulo[aleatorio]} </h1><h2>${bug[aleatorio]}</h2>`;
        complemento.classList.add('Bug');;
    }else{
        let aleatorio = Math.floor(Math.random()*25);
        complemento.innerHTML = `<img src="midias/img/logoPatch.png" width="200px"><h1> ${patchTitulo[aleatorio]} </h1><h2>${patch[aleatorio]}</h2>`;
        complemento.classList.add('Patch');
    }

    btnRecarregar.addEventListener('click', desafioJs);


}

//eventos

btnHtml.addEventListener('click', desafioHtml, false);
btnCss.addEventListener('click', desafioCss, false);
btnJs.addEventListener('click', desafioJs, false);



btnVoltar.addEventListener('click', ()=>{
    escolherDesafio.style.display = 'block';
    desafio.style.display = 'none';
});

btnRodape.addEventListener('click', ()=>{
    window.location.reload();
});