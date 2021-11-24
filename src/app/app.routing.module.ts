import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChapeusViewComponent } from './Produtos/Acessorios/chapeus.component';
import { RelogiosViewComponent } from'./Produtos/Acessorios/relogios.component';
import { CintosViewComponent } from'./Produtos/Acessorios/cintos.component';
import { AneisViewComponent } from'./Produtos/Acessorios/aneis.component';
import { BolsasViewComponent } from'./Produtos/Acessorios/bolsas.component';
import { BrincosViewComponent } from'./Produtos/Acessorios/brincos.component';
import { CachecoisViewComponent } from'./Produtos/Acessorios/cachecois.component';
import { ColaresViewComponent } from'./Produtos/Acessorios/colares.component';
import { PresilhasViewComponent } from'./Produtos/Acessorios/presilhas.component';
import { PulseirasViewComponent } from'./Produtos/Acessorios/pulseiras.component';
import { AviadorViewComponent } from'./Produtos/Oculos/aviador.component';
import { BorboletaViewComponent } from'./Produtos/Oculos/borboleta.component';
import { FlatViewComponent } from'./Produtos/Oculos/flat.component';
import { GatinhoViewComponent } from'./Produtos/Oculos/gatinho.component';
import { HexagonalViewComponent } from'./Produtos/Oculos/hexagonal.component';
import { MeiaarmacaoViewComponent } from'./Produtos/Oculos/meia-armacao.component';
import { OvalViewComponent } from'./Produtos/Oculos/oval.component';
import { QuadradoViewComponent } from'./Produtos/Oculos/quadrado.component';
import { RedondoViewComponent } from'./Produtos/Oculos/redondo.component';
import { RetangularViewComponent } from'./Produtos/Oculos/retangular.component';
import { CBrancaBasicaViewComponent } from'./Produtos/Camisetas/brancabasica.component';
import { ComEstampaViewComponent } from'./Produtos/Camisetas/comestampa.component';
import { DipDyeViewComponent } from'./Produtos/Camisetas/dipdye.component';
import { EsportivaViewComponent } from'./Produtos/Camisetas/esportiva.component';
import { GolaAltaViewComponent } from'./Produtos/Camisetas/golaalta.component';
import { GolaVViewComponent } from'./Produtos/Camisetas/golav.component';
import { ListrasViewComponent } from'./Produtos/Camisetas/listras.component';
import { MangaCurtaViewComponent } from'./Produtos/Camisetas/mangacurta.component';
import { PretaBasicaViewComponent } from'./Produtos/Camisetas/pretabasica.component';
import { SemEstampaViewComponent } from'./Produtos/Camisetas/semestampa.component';
import { BBrancaBasicaViewComponent } from'./Produtos/Blusas/brancabasica.component';
import { BComCapuzViewComponent } from'./Produtos/Blusas/comcapuz.component';
import { BComEstampaViewComponent } from'./Produtos/Blusas/comestampa.component';
import { BFullPrintViewComponent } from'./Produtos/Blusas/fullprint.component';
import { BMangaCompridaViewComponent } from'./Produtos/Blusas/mangacomprida.component';
import { BMangaCurtaViewComponent } from'./Produtos/Blusas/mangacurta.component';
import { BPretoBasicoViewComponent } from'./Produtos/Blusas/pretobasico.component';
import { BSemCapuzViewComponent } from'./Produtos/Blusas/semcapuz.component';
import { BSemEstampaViewComponent } from'./Produtos/Blusas/semestampa.component';
import { BSemMangaViewComponent } from'./Produtos/Blusas/semmanga.component';
import { CCurtaViewComponent} from'./Produtos/Calcas/curta.component';
import { CJeansViewComponent} from'./Produtos/Calcas/jeans.component';
import { CMoletomViewComponent} from'./Produtos/Calcas/moletom.component';
import { CCroppedViewComponent} from'./Produtos/Calcas/cropped.component';
import { CRetaViewComponent} from'./Produtos/Calcas/reta.component';
import { CSlouchyViewComponent} from'./Produtos/Calcas/slouchy.component';
import { CClochardViewComponent} from'./Produtos/Calcas/clochard.component';
import { CJoggerViewComponent} from'./Produtos/Calcas/jogger.component';
import { CSkinnyViewComponent} from'./Produtos/Calcas/skinny.component';
import { CChinoViewComponent} from'./Produtos/Calcas/chino.component';
import { VTomaraQueCaiaViewComponent} from'./Produtos/Vestidos/tomaraquecaia.component';
import { VDecoteEmVViewComponent} from'./Produtos/Vestidos/decoteemv.component';
import { VDecoteEmUViewComponent} from'./Produtos/Vestidos/decoteemu.component';
import { VDecoteNasCostasViewComponent} from'./Produtos/Vestidos/decotenascostas.component';
import { VAssimetricoViewComponent} from'./Produtos/Vestidos/assimetrico.component';
import { VFrenteUnicaViewComponent} from'./Produtos/Vestidos/frenteunica.component';
import { VGolaAltaViewComponent} from'./Produtos/Vestidos/golaalta.component';
import { VQuadradoViewComponent} from'./Produtos/Vestidos/quadrado.component';
import { VCoracaoViewComponent} from'./Produtos/Vestidos/coracao.component';
import { VCanoaViewComponent} from'./Produtos/Vestidos/canoa.component';
import { BJeansViewComponent} from'./Produtos/Bermudas/jeans.component';
import { BChinoViewComponent} from'./Produtos/Bermudas/chino.component';
import { BAlfaiatariaViewComponent} from'./Produtos/Bermudas/alfaiataria.component';
import { BCargoViewComponent} from'./Produtos/Bermudas/cargo.component';
import { BMoletomViewComponent} from'./Produtos/Bermudas/moletom.component';
import { BSinteticasViewComponent} from'./Produtos/Bermudas/sinteticas.component';
import { BTactelViewComponent} from'./Produtos/Bermudas/tactel.component';
import { BPoliesterViewComponent} from'./Produtos/Bermudas/poliester.component';
import { BSarjaViewComponent} from'./Produtos/Bermudas/sarja.component';
import { BChambrayViewComponent} from'./Produtos/Bermudas/chambray.component';
import { SEvaseViewComponent} from'./Produtos/Saias/evase.component';
import { SLapisViewComponent} from'./Produtos/Saias/lapis.component';
import { SPregasViewComponent} from'./Produtos/Saias/pregas.component';
import { SEnvelopeViewComponent} from'./Produtos/Saias/envelope.component';
import { SDropeadaViewComponent} from'./Produtos/Saias/dropeada.component';
import { SAssimetricaViewComponent} from'./Produtos/Saias/assimetrica.component';
import { SBalaoViewComponent} from'./Produtos/Saias/balao.component';
import { STracadaViewComponent} from'./Produtos/Saias/tracada.component';
import { SEnviesadaViewComponent} from'./Produtos/Saias/enviesada.component';
import { SMiniViewComponent} from'./Produtos/Saias/mini.component';
import { SMBrogueViewComponent} from'./Produtos/SapatosMasculinos/brogue.component';
import { SMBotasViewComponent} from'./Produtos/SapatosMasculinos/botas.component';
import { SMTenisCasualViewComponent} from'./Produtos/SapatosMasculinos/teniscasual.component';
import { SMMocassimViewComponent} from'./Produtos/SapatosMasculinos/mocassim.component';
import { SMSandaliasViewComponent} from'./Produtos/SapatosMasculinos/sandalias.component';
import { SMSapatenisViewComponent} from'./Produtos/SapatosMasculinos/sapatenis.component';
import { SMLoaferViewComponent} from'./Produtos/SapatosMasculinos/loafer.component';
import { SMOxfordViewComponent} from'./Produtos/SapatosMasculinos/oxford.component';
import { SMDocksideViewComponent} from'./Produtos/SapatosMasculinos/dockside.component';
import { SMDerbyViewComponent} from'./Produtos/SapatosMasculinos/derby.component';
import { SFSandaliasViewComponent} from'./Produtos/SapatosFemininos/sandalias.component';
import { SFBotasViewComponent} from'./Produtos/SapatosFemininos/botas.component';
import { SFSapatilhasViewComponent} from'./Produtos/SapatosFemininos/sapatilhas.component';
import { SFSaltoGrossoViewComponent} from'./Produtos/SapatosFemininos/saltogrosso.component';
import { SFSaltoFinoViewComponent} from'./Produtos/SapatosFemininos/saltofino.component';
import { SFAnabelasViewComponent} from'./Produtos/SapatosFemininos/anabelas.component';
import { SFRasteirinhasViewComponent} from'./Produtos/SapatosFemininos/rasteirinhas.component';
import { SFMocassimViewComponent} from'./Produtos/SapatosFemininos/mocassim.component';
import { SFPeepToeViewComponent} from'./Produtos/SapatosFemininos/peeptoe.component';
import { SFGladiadorViewComponent} from'./Produtos/SapatosFemininos/gladiador.component';

import { HomeViewComponent } from './Produtos/home.component';


@NgModule({
  declarations: [ 
    ChapeusViewComponent],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: 'home/acessorios-chapeus', component: ChapeusViewComponent },
      { path: 'home/acessorios-relogios', component: RelogiosViewComponent },
      { path: 'home/acessorios-cintos', component: CintosViewComponent },
      { path: 'home/acessorios-aneis', component: AneisViewComponent },
      { path: 'home/acessorios-bolsas', component: BolsasViewComponent },
      { path: 'home/acessorios-brincos', component: BrincosViewComponent },
      { path: 'home/acessorios-cachecois', component: CachecoisViewComponent },
      { path: 'home/acessorios-colares', component: ColaresViewComponent },
      { path: 'home/acessorios-presilhas', component: PresilhasViewComponent },
      { path: 'home/acessorios-pulseiras', component: PulseirasViewComponent },
      { path: 'home/oculos-aviador', component: AviadorViewComponent },
      { path: 'home/oculos-borboleta', component: BorboletaViewComponent },
      { path: 'home/oculos-flat', component: FlatViewComponent },
      { path: 'home/oculos-gatinho', component: GatinhoViewComponent },
      { path: 'home/oculos-hexagonal', component: HexagonalViewComponent },
      { path: 'home/oculos-meia-armacao', component: MeiaarmacaoViewComponent },
      { path: 'home/oculos-oval', component: OvalViewComponent },
      { path: 'home/oculos-quadrado', component: QuadradoViewComponent },
      { path: 'home/oculos-redondo', component: RedondoViewComponent },
      { path: 'home/oculos-retangular', component: RetangularViewComponent },
      { path: 'home/camisetas-brancabasica', component: CBrancaBasicaViewComponent },
      { path: 'home/camisetas-comestampa', component: ComEstampaViewComponent },
      { path: 'home/camisetas-dipdye', component: DipDyeViewComponent },
      { path: 'home/camisetas-esportiva', component: EsportivaViewComponent },
      { path: 'home/camisetas-golaalta', component: GolaAltaViewComponent },
      { path: 'home/camisetas-golav', component: GolaVViewComponent },
      { path: 'home/camisetas-listras', component: ListrasViewComponent },
      { path: 'home/camisetas-mangacurta', component: MangaCurtaViewComponent },
      { path: 'home/camisetas-pretabasica', component: PretaBasicaViewComponent },
      { path: 'home/camisetas-semestampa', component: SemEstampaViewComponent },
      { path: 'home/blusas-brancabasica', component: BBrancaBasicaViewComponent },
      { path: 'home/blusas-comcapuz', component: BComCapuzViewComponent },
      { path: 'home/blusas-comestampa', component: BComEstampaViewComponent },
      { path: 'home/blusas-fullprint', component: BFullPrintViewComponent },
      { path: 'home/blusas-mangacomprida', component: BMangaCompridaViewComponent },
      { path: 'home/blusas-mangacurta', component: BMangaCurtaViewComponent },
      { path: 'home/blusas-pretobasico', component: BPretoBasicoViewComponent },
      { path: 'home/blusas-semcapuz', component: BSemCapuzViewComponent },
      { path: 'home/blusas-semestampa', component: BSemEstampaViewComponent },
      { path: 'home/blusas-semmanga', component: BSemMangaViewComponent },
      { path: 'home/calcas-curta', component: CCurtaViewComponent },
      { path: 'home/calcas-jeans', component: CJeansViewComponent },
      { path: 'home/calcas-moletom', component: CMoletomViewComponent },
      { path: 'home/calcas-cropped', component: CCroppedViewComponent },
      { path: 'home/calcas-reta', component: CRetaViewComponent },
      { path: 'home/calcas-slouchy', component: CSlouchyViewComponent },
      { path: 'home/calcas-clochard', component: CClochardViewComponent },
      { path: 'home/calcas-jogger', component: CJoggerViewComponent },
      { path: 'home/calcas-skinny', component: CSkinnyViewComponent },
      { path: 'home/calcas-chino', component: CChinoViewComponent },
      { path: 'home/vestidos-tomara-que-caia', component: VTomaraQueCaiaViewComponent },
      { path: 'home/vestidos-decote-em-v', component: VDecoteEmVViewComponent },
      { path: 'home/vestidos-decote-em-u', component: VDecoteEmUViewComponent },
      { path: 'home/vestidos-decote-nas-costas', component: VDecoteNasCostasViewComponent },
      { path: 'home/vestidos-assimetrico', component: VAssimetricoViewComponent },
      { path: 'home/vestidos-frente-unica', component: VFrenteUnicaViewComponent },
      { path: 'home/vestidos-gola-alta', component: VGolaAltaViewComponent },
      { path: 'home/vestidos-quadrado', component: VQuadradoViewComponent },
      { path: 'home/vestidos-coracao', component: VCoracaoViewComponent },
      { path: 'home/vestidos-canoa', component: VCanoaViewComponent },
      { path: 'home/bermudas-jeans', component: BJeansViewComponent },
      { path: 'home/bermudas-chino', component: BChinoViewComponent },
      { path: 'home/bermudas-alfaiataria', component: BAlfaiatariaViewComponent },
      { path: 'home/bermudas-cargo', component: BCargoViewComponent },
      { path: 'home/bermudas-moletom', component: BMoletomViewComponent },
      { path: 'home/bermudas-sinteticas', component: BSinteticasViewComponent },
      { path: 'home/bermudas-tactel', component: BTactelViewComponent },
      { path: 'home/bermudas-poliester', component: BPoliesterViewComponent },
      { path: 'home/bermudas-sarja', component: BSarjaViewComponent },
      { path: 'home/bermudas-chambray', component: BChambrayViewComponent },
      { path: 'home/saias-evase', component: SEvaseViewComponent },
      { path: 'home/saias-lapis', component: SLapisViewComponent },
      { path: 'home/saias-pregas', component: SPregasViewComponent },
      { path: 'home/saias-envelope', component: SEnvelopeViewComponent },
      { path: 'home/saias-dropeada', component: SDropeadaViewComponent },
      { path: 'home/saias-assimetrica', component: SAssimetricaViewComponent },
      { path: 'home/saias-balao', component: SBalaoViewComponent },
      { path: 'home/saias-tracada', component: STracadaViewComponent },
      { path: 'home/saias-enviesada', component: SEnviesadaViewComponent },
      { path: 'home/saias-mini', component: SMiniViewComponent },
      { path: 'home/sapatos-masculinos-brogue', component: SMBrogueViewComponent },
      { path: 'home/sapatos-masculinos-botas', component: SMBotasViewComponent },
      { path: 'home/sapatos-masculinos-tenis-casual', component: SMTenisCasualViewComponent },
      { path: 'home/sapatos-masculinos-mocassim', component: SMMocassimViewComponent },
      { path: 'home/sapatos-masculinos-sandalias', component: SMSandaliasViewComponent },
      { path: 'home/sapatos-masculinos-sapatenis', component: SMSapatenisViewComponent },
      { path: 'home/sapatos-masculinos-loafer', component: SMLoaferViewComponent },
      { path: 'home/sapatos-masculinos-oxford', component: SMOxfordViewComponent },
      { path: 'home/sapatos-masculinos-dockside', component: SMDocksideViewComponent },
      { path: 'home/sapatos-masculinos-derby', component: SMDerbyViewComponent },
      { path: 'home/sapatos-femininos-sandalias', component: SFSandaliasViewComponent },
      { path: 'home/sapatos-femininos-botas', component: SFBotasViewComponent },
      { path: 'home/sapatos-femininos-sapatilhas', component: SFSapatilhasViewComponent },
      { path: 'home/sapatos-femininos-salto-grosso', component: SFSaltoGrossoViewComponent },
      { path: 'home/sapatos-femininos-salto-fino', component: SFSaltoFinoViewComponent },
      { path: 'home/sapatos-femininos-anabelas', component: SFAnabelasViewComponent },
      { path: 'home/sapatos-femininos-rasteirinhas', component: SFRasteirinhasViewComponent },
      { path: 'home/sapatos-femininos-mocassim', component: SFMocassimViewComponent },
      { path: 'home/sapatos-femininos-peep-toe', component: SFPeepToeViewComponent },
      { path: 'home/sapatos-femininos-gladiador', component: SFGladiadorViewComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}