import React, { useRef, useState, useEffect } from 'react';
import { Nav, NavDropdown, Container, Row, Col, Card, Modal } from 'react-bootstrap';
import './App.css';

import FormContato from './components/FormContato';
import NavClient from './components/NavClient';
import WhatsappButton from './components/WhatsappButton';
import Ebook from './arquivos/pdfs/ebook.pdf';
import VideoHome from './arquivos/videos/videoEcoHome.mp4';

import Logo from './arquivos/imgs/logo.png';

import ModalCarrossel from './components/ModalCarrossel';
import CarrosselEmissorNF from './components/CarrosselEmissorNF';
import CarrosselPDV from './components/CarrosselPDV';
import CarrosselApp from './components/CarrosselApp';
import CarrosselADMApp from './components/CarrosselADMApp';
import CarrosselCRM from './components/CarrosselCRM';
import CarrosselADMCRM from './components/CarrosselADMCRM';
import ChatWoot from './components/ChatWoot';
import Background from './arquivos/imgs/imagemDeFundo.jpg';
import BackgroundImage from './components/BackgroundImage';
import Background006 from './arquivos/imgs/006.jpg';







import './components/PopoverFont.css';

const regexClass = /(Font-[a-zA-Z]+)/g;

const fonts = [
	'Font-Arial',
	'Font-TimesNewRoman',
	'Font-FranklinGothic',
    'Font-NotoSerif',
    'Font-Lato',
    'Font-Jost',
    'Font-FragmentMono',
	'Font-OpenSans',
	'Font-PTSerif',
	'Font-Roboto',
	'Font-Playfair'
];

function App(){
	const topo = useRef(null);
	const vantagens = useRef(null);
	const empresa = useRef(null);
	const produtosEmissor = useRef(null);
	const produtosPDV = useRef(null);
	const produtosApp = useRef(null);

	const fontsList = useRef(null);
	const cardFonts = useRef(null);
	const [cardTopOffset, setCardTopOffset] = useState(null);
	const [cardRightOffset, setCardRightOffset] = useState(null);
	const toChangeFont = useRef(null);

	const [showEmissorNF, setShowEmissorNF] = useState(false);

    const handleShowEmissorNF = () => setShowEmissorNF(true);
    const handleCloseEmissorNF = () => setShowEmissorNF(false);

	const [showPDV, setShowPDV] = useState(false);

    const handleShowPDV = () => setShowPDV(true);
    const handleClosePDV = () => setShowPDV(false);

	const [showApp, setShowApp] = useState(false);

    const handleShowApp = () => setShowApp(true);
    const handleCloseApp = () => setShowApp(false);

	const scrollToSection = (elementRef) => {
		if(!elementRef)
		  return;
	
		window.scrollTo({
		  top: elementRef.current.offsetTop - 200,
		  behavior: 'smooth'
		});
	}

	useEffect(() => {

		function renderFontsList(){
			if(!toChangeFont.current)
				return;

			fontsList.current = fonts.map(f => 
                <span key={f} className={`itemList p-2 ${f}`} 
				onClick={() => changeFont(f)}>{f}</span> 
                )
				
			cardFonts.current.classList.remove('d-none');
		}

		renderFontsList();

	}, [toChangeFont.current]);

	const renderCardFonts = (event) => {
		if(toChangeFont.current == event.currentTarget){
			cardFonts.current.classList.add('d-none');
			toChangeFont.current = null;
			return;
		}

		toChangeFont.current = event.currentTarget;

		const cardHeight = toChangeFont.current.clientHeight;

		setCardTopOffset(event.clientY - cardHeight);
		setCardRightOffset(event.clientX);

		// console.log(cardFonts.current.classList.toggle('d-none'));

		// cardFonts.current.classList.toggle('d-none');
	}

	function changeFont(font){
		// console.log(target);
		const listaClassesElemento = toChangeFont.current.classList;

		const classToRemove = listaClassesElemento.value.match(regexClass);
		listaClassesElemento.remove(classToRemove);
		
		const selectedClass = classToRemove ? classToRemove[0] : 'font-teste';

		if(selectedClass === font)
			return;

		listaClassesElemento.add(font);
	}

  return (
    <>

	<div style={{top: `${cardTopOffset}px`, left: `${cardRightOffset}px`}} ref={cardFonts} 
		className='d-none cardFonts text-center' target={toChangeFont.current}>
		<Card>
			<Card.Body className='px-0'>
				{fontsList.current ? fontsList.current.map(e => e) : ''}
			</Card.Body>
		</Card>
	</div>

    <NavClient needHide={true}>
        <Nav className='w-100 d-flex justify-content-end'>
          <Nav.Link onClick={() => scrollToSection(vantagens)} href="#">OBJETIVO</Nav.Link>
          <Nav.Link onClick={() => scrollToSection(empresa)} href="#">EMPRESA</Nav.Link>
          {/* <Nav.Link onClick={() => scrollToSection(produtos)} href="#">Produtos</Nav.Link> */}
		  <NavDropdown title='PRODUTOS E SERVIÇOS' menuVariant='dark'>
            <NavDropdown.Item href='#' onClick={() => scrollToSection(produtosEmissor)}>SOFT-PHONE WEB</NavDropdown.Item>
            <NavDropdown.Divider/>
			<NavDropdown.Item href='#' onClick={() => scrollToSection(produtosPDV)}>SERVIDORES</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='#'  onClick={() => scrollToSection(produtosApp)}>PABX</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='DOWLOADS' menuVariant='dark'>
            
            
            <NavDropdown.Item href='https://anydesk.com/pt/downloads/thank-you?dv=win_exe' target='_blank'>AnyDesk</NavDropdown.Item>
            <NavDropdown.Divider/>
			<NavDropdown.Item href='https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe' target='_blank'>Team Viewer</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
    </NavClient>

    <WhatsappButton />
	<ChatWoot></ChatWoot>

    <Container fluid className='allFather'>
	

	<Row ref={topo}  className='justify-content-center pb-4 ' style={{ backgroundImage: `url(${Background006})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
    backgroundPosition: 'cover',
   }} >'
  

          <Col xs={120} md={4} className='d-flex flex-column  ml-auto'>
			<div className='w-100 d-flex justify-content-center logoVideo'>
				
			</div>

            <div className={`fundoAzul text-white rounded-4  p-3 m-4 ml-auto`}>
              <div className='text-center pt-2 textoTitulo'><b>Conectando Empresas ao Futuro da Comunicação</b></div>
              <hr/>
              <div className='w-100 px-3 justify-text'>
			  A comunicação empresarial está evoluindo a uma velocidade incrível, e a chave para o sucesso reside na capacidade de adaptar-se a essa transformação digital. Nós, da LanSip Tecnologia, entendemos que a telefonia segura e econômica é essencial para o funcionamento eficiente das empresas de hoje. É por isso que estamos orgulhosamente apresentando nossa visão para o futuro: um site que oferece a melhor conexão entre telefonia segura e econômica, combinando uma infraestrutura moderna, tecnologia de ponta e segurança avançada.
              </div>
            </div>

          </Col>

          

          
            
          
        </Row>

        
		
		<Row ref={vantagens} className='justify-content-center pb-4 ' style={{ backgroundImage: `url(${Background})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
    backgroundPosition: 'center',
   }} >'
		
        <div className="content"></div>
		
			<Col xs={12} className='text-center m-5 p-2 textoTitulo'>
			
				<h2 onClick={renderCardFonts}>Nossa Missão</h2>
			</Col>

			<Col xs={12} sm={6} lg={6} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>            
				<div className='text-center textoTituloCard' onClick={renderCardFonts}>SEGURANÇA</div>
				<ul className='textoCard' onClick={renderCardFonts}>
					<li>Na LanSip Tecnologia, nossa missão é clara, proteger a comunicação das empresas enquanto impulsionamos seu crescimento com economia constante. Entendemos que as empresas precisam de soluções de comunicação confiáveis e acessíveis para prosperar em um ambiente de negócios cada vez mais competitivo.</li>
					
				</ul>
			</Col>

			<Col xs={12} sm={6} lg={6} className={`text-dark m-2 rounded-4 p-4 fundoCard`}>
				<div className='text-center textoTituloCard' onClick={renderCardFonts}>SERVIÇOS</div>
				<ul className='textoCard' onClick={renderCardFonts}>
					<li>PABX VoIP de Última Geração: Oferecemos PABX VoIP de ponta, que permite às empresas se comunicarem de forma eficiente e econômica, seja localmente ou internacionalmente.</li>
					<li>Serviços de Nuvem Seguros: Além da telefonia, fornecemos uma suíte completa de serviços em nuvem que ajudam as empresas a gerenciar seus dados e aplicativos com segurança.</li>
					<li>Segurança Avançada: A segurança é uma prioridade. Implementamos as medidas de segurança mais avançadas para proteger todas as formas de comunicação da sua empresa</li>
					
				</ul>
			</Col>
			
        
			
		</Row>
		
		
        
		

			{/* EMPRESA */}
			{/* <div ref={empresa} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={empresa} className='justify-content-center pb-4'>
			
				<Col  xs={12} className='text-center m-5 pt-2 textoTitulo'>
					<h2 onClick={renderCardFonts}>Por que Escolher a LanSip Tecnologia ?</h2>
				</Col>
				<Col xs={12} sm={6} lg={10} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul className='textoCard' onClick={renderCardFonts}>
					<p>Experiência Comprovada: Com anos de experiência no setor, construímos uma reputação sólida como líderes em telefonia VoIP e serviços em nuvem. </p>
					<p>Inovação Contínua: Mantemo-nos à frente das tendências tecnológicas para oferecer a você as soluções mais inovadoras e eficazes.</p>
					<p>Atendimento ao Cliente: Nossa equipe de suporte técnico está sempre disponível para atender às suas necessidades e resolver qualquer problema que possa surgir.</p>
					<p>Economia Real: Acreditamos que você não deve comprometer a qualidade pela economia. Oferecemos soluções de alta qualidade a preços competitivos.</p>
				    </ul>
				</Col>
				

				

				
			</Row>

			{/* PRODUTOS EMISSOR*/}
			{/* <div ref={produtosEmissor} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={produtosEmissor} className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-4 pt-3 textoTitulo'>
					<h2 onClick={renderCardFonts}>PRODUTOS</h2>
				</Col>
				<Col xs={12} className='mb-4 pb-2 text-center'>
					<h3 className='textoTitulo' onClick={renderCardFonts}>Softphone Web</h3>
				</Col>
				
				{/* INÍCIO CARROSSEL IMAGENS */}
				<Col xs={8} className='mb-4'>
					<CarrosselEmissorNF click={handleShowEmissorNF}/>
				</Col>

				<Modal show={showEmissorNF} onHide={handleCloseEmissorNF} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='Softphone Web'>
						<CarrosselEmissorNF />
					</ModalCarrossel>
				</Modal>

				{/* FIM CARROSSEL IMAGENS */}

				<Col xs={12} sm={6} lg={10} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul className='textoCard' onClick={renderCardFonts}>
					<p>O nosso Softphone Web é a sua janela para uma comunicação empresarial eficaz e flexível. Imagine ter todas as funcionalidades de um telefone tradicional, mas ao alcance do seu navegador. Com o nosso Softphone Web, você pode realizar chamadas de voz cristalinas, videoconferências envolventes e mensagens instantâneas, tudo a partir de uma interface intuitiva e amigável.</p>
					<p>Chamadas de Voz de Alta Qualidade, desfrute de chamadas de voz nítidas e confiáveis, esteja você conversando com colegas de equipe, parceiros de negócios ou clientes. A qualidade de áudio é a nossa prioridade número um.</p>
					<p>Integração Perfeita, nosso Softphone Web se integra facilmente às ferramentas que você já usa, como calendários, agendas de contatos e sistemas de gerenciamento de chamadas. Isso significa menos interrupções e mais produtividade.</p>
					<p>Acessibilidade em Qualquer Lugar, não importa onde você esteja, desde que tenha uma conexão à internet, você pode acessar nosso Softphone Web. Isso dá a você a liberdade de trabalhar de onde quiser.</p>
				</ul>
				</Col>
			</Row>

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 pb-2 textoTitulo'>
					<h2 onClick={renderCardFonts}>Características</h2>
				</Col>
				
				
				
				<Col xs={12} sm={6} lg={10} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul className='textoCard' onClick={renderCardFonts}>
						<li>Relatórios de Chamadas Detalhados:

Obtenha insights valiosos sobre o desempenho de comunicação da sua empresa com relatórios de chamadas detalhados. Analise dados de chamadas, durações, origens, destinos e muito mais. Essas informações são essenciais para otimizar o atendimento ao cliente e tomar decisões informadas.</li>
						<li>Análise de Filas e Atendimentos:

Avalie o desempenho de suas filas de atendimento e compreenda como as chamadas são tratadas. Monitore o tempo médio de espera, a eficiência dos agentes e identifique áreas de melhoria para proporcionar uma experiência superior aos seus clientes.</li>
						<li>Discador Callback:

Simplifique a comunicação com os clientes ao oferecer a opção de retorno de chamada. Os clientes podem solicitar um retorno conveniente, e sua equipe pode gerenciar e priorizar chamadas de retorno de forma eficaz.</li>
						<li>Monitor de Filas em Tempo Real:

Mantenha o controle total das suas filas de atendimento com o monitoramento em tempo real. Visualize o status das filas, o número de chamadas em espera e a disponibilidade dos agentes para tomar ações imediatas quando necessário.</li>
						<li>Administração de Usuários Intuitiva:

Simplifique a gestão de usuários com nossa interface intuitiva. Adicione, remova ou atualize contas de usuários com facilidade, garantindo que todos tenham acesso aos recursos necessários para uma comunicação eficiente.</li>
						<li>Segurança e Confiabilidade:

Nossa plataforma é construída com segurança e confiabilidade em mente. Utilizamos tecnologias avançadas para proteger suas comunicações e garantir que seu negócio funcione sem interrupções.</li>
						
					</ul>
				</Col>
				
				
			</Row>

			{/* PRODUTOS PDV */}
			{/* <div ref={produtosPDV} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={produtosPDV}className='justify-content-center pb-4'>
				<Col xs={12} className=' m-5 pb-2 text-center'>
					<h3 className='textoTitulo' onClick={renderCardFonts}>Servidores em Nuvem</h3>
				</Col>

				{/* INÍCIO CARROSSEL IMAGENS */}
				<Col xs={8} className='mb-4'>
					<CarrosselPDV click={handleShowPDV}/>
				</Col>

				<Modal show={showPDV} onHide={handleClosePDV} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='Desbloqueie o Poder da Nuvem'>
						<CarrosselPDV />
					</ModalCarrossel>
				</Modal>

				{/* FIM CARROSSEL IMAGENS */}

				<Col xs={12} sm={6} lg={10} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul className='textoCard' onClick={renderCardFonts}>
					<p>No coração de nossa plataforma de hospedagem, encontram-se nossos servidores em nuvem de última geração, projetados para oferecer um desempenho excepcional, confiabilidade incomparável e escalabilidade ilimitada. Aqui está o que nossos servidores em nuvem podem fazer por você: </p>
					</ul>
				</Col>
			</Row>

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 pb-2 textoTitulo'>
					<h2 onClick={renderCardFonts}>Características</h2>
				</Col>
				
			
				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul onClick={renderCardFonts}>
						<li>Desempenho Inigualável: Nossos servidores em nuvem são alimentados por hardware de alto desempenho e recursos avançados de virtualização. Isso garante que seu site carregue rapidamente e ofereça uma experiência impecável aos visitantes, independentemente do tráfego.</li>
						<li>Confiabilidade 24/7: A confiabilidade é nossa prioridade. Com redundância em várias camadas e monitoramento constante, seus serviços  estarão sempre disponíveis, minimizando qualquer tempo de inatividade inesperado.</li>
						<li>Escalabilidade Sob Medida: À medida que seu site cresce, nossos servidores em nuvem crescem com você. Adicione recursos conforme necessário, sem interrupções, para acomodar picos de tráfego e expansão contínua</li>
						
					</ul>
				</Col>

				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul onClick={renderCardFonts}>
						<li>Segurança Robusta: A segurança é incorporada em cada aspecto de nossa infraestrutura em nuvem. Protegemos seus dados e informações do cliente com as mais recentes tecnologias de segurança e conformidade rigorosa.</li>
						<li>Recuperação de Desastres Integrada: Esteja preparado para o inesperado. Nossa infraestrutura de nuvem inclui soluções de backup e recuperação de desastres, garantindo que seus dados estejam sempre seguros.</li>
						<li>Economia de Custos: Com nossa abordagem de pagamento conforme o uso, você paga apenas pelo que usa. Isso significa que você economiza dinheiro, eliminando gastos com hardware e manutenção.</li>
						<li>Suporte Excepcional: Nossa equipe de especialistas está sempre disponível para ajudá-lo. Oferecemos suporte técnico de classe mundial 24/7, garantindo que suas perguntas sejam respondidas e seus problemas resolvidos rapidamente.</li>
					
					</ul>
				</Col>

				

				
			</Row>

			{/* PRODUTOS App */}
			{/* <div ref={produtosApp} className='d-flex justify-content-center mt-5 pt-1'>
				<div className='w-50 divisor'></div>
			</div> */}

			<Row ref={produtosApp}className='justify-content-center pb-4'>
				<Col xs={12} className=' m-5 pb-2 text-center'>
					<h3 className='textoTitulo' onClick={renderCardFonts}>Servidores PABX de Primeira Classe e Suporte Especializado</h3>
				</Col>

				{/* INÍCIO CARROSSEL IMAGENS */}
				<Col xs={6} className='mb-4'>
					<CarrosselApp click={handleShowApp}/>
				</Col>

				<Modal show={showApp} onHide={handleCloseApp} centered dialogClassName='w90per'>
					<ModalCarrossel titulo='Servidores PABX de Primeira Classe e Suporte Especializado'>
						<CarrosselApp />
					</ModalCarrossel>
				</Modal>

				{/* FIM CARROSSEL IMAGENS */}

				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
				<ul className='textoCard' onClick={renderCardFonts}>
					<p>Na vanguarda das comunicações empresariais, nossos Servidores PABX oferecem uma solução de telefonia sofisticada e eficiente para empresas de todos os tamanhos. Além disso, nosso Suporte em Servidores PABX garante que sua infraestrutura de comunicação esteja sempre operando de maneira ideal. Aqui está o que oferecemos: </p>
					</ul>
					
					
				</Col>
			</Row>

			

			<Row className='justify-content-center pb-4'>
				<Col xs={12} className='text-center m-5 pb-2 textoTitulo'>
					<h2 onClick={renderCardFonts}>Características</h2>
				</Col>
				
			
				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul onClick={renderCardFonts}>
						<li>Servidores PABX Avançados: Nossos servidores PABX são projetados com a mais recente tecnologia para fornecer uma comunicação interna e externa eficaz. Com recursos de gerenciamento flexíveis, você controla as comunicações de sua empresa de forma eficiente.</li>
						<li>Confiabilidade: Sabemos que a comunicação é vital para os negócios. Nossos servidores PABX oferecem alta disponibilidade, garantindo que suas chamadas estejam sempre conectadas e suas operações de negócios ininterruptas.</li>
						<li>Escalabilidade Personalizada: Cresça sem limitações. Nossas soluções escaláveis permitem que você adicione linhas e recursos à medida que sua empresa cresce, mantendo a flexibilidade para atender às suas necessidades de comunicação em evolução.</li>
						<li>Suporte Técnico de Excelência: Nossa equipe de especialistas está pronta para ajudar. Oferecemos suporte técnico dedicado e personalizado para resolver problemas rapidamente e manter sua infraestrutura PABX em excelente funcionamento.</li>
					</ul>
				</Col>

				<Col xs={12} sm={6} lg={4} className={`m-2 rounded-4 p-4 fundoCard`}>
					<ul onClick={renderCardFonts}>
						<li>Integração Perfeita: Integramos seu PABX com outras tecnologias de comunicação, como VoIP e sistemas de mensagens unificadas, para criar um ambiente de comunicação unificada eficaz.</li>
						<li>Segurança e Privacidade: Proteja suas comunicações com medidas de segurança avançadas e conformidade rigorosa para manter seus dados e informações seguros.</li>
						<li>Treinamento e Capacitação: Oferecemos treinamento abrangente para garantir que sua equipe aproveite ao máximo as capacidades do PABX, garantindo que você obtenha o máximo valor de sua solução.</li>
						<li>Economia de Custos: Nossas soluções PABX são projetadas para otimizar seus gastos de comunicação, ajudando você a economizar e aprimorar sua eficiência operacional.</li>
					
					</ul>
				</Col>

				

				
			</Row>

			

			

    </Container>
    </>
  );
}

export default App;
