import { Component, h } from '@stencil/core';

@Component({
  tag: 'dsw-footer',
  styleUrl: 'dsw-footer.css',
  shadow: true,
})
export class DswFooter {

  render() {
    return (
<footer>
        <div class="top-footer">
          <ul>
            <li>
              <a href="#">
                <dsw-icon icon="ic_sp_xs" url="assets/img/icon_statement.svg"></dsw-icon>
                <dsw-paragraph appearance="paragraph-lg" text="Entenda seu extrato"></dsw-paragraph>
              </a>
            </li>
            <li>
              <a href="#">
                <dsw-icon icon="ic_sp_xs" url="assets/img/icon_policy.svg"></dsw-icon>
                <dsw-paragraph appearance="paragraph-lg" text="Política de privacidade e segurança"></dsw-paragraph>
              </a>
            </li>
          </ul>
          <div class="slogan-storage-button">
            <span>
              <dsw-paragraph appearance="paragraph-sl" text="Baixe o nosso Aplicativo"></dsw-paragraph>
            </span>
            <ul class="ul-store-button">
              <li>
                <dsw-store-button appearance="store-button-android store-button-light" text="Baixar no"></dsw-store-button>
              </li>
              <li>
                <dsw-store-button appearance="store-button-apple store-button-light" text="Baixar na"></dsw-store-button>
              </li>
            </ul>
          </div>
        </div>
        <div class="below-footer">
          <ol>
            {/* 1 */}
            <li>
              <div class="first-below-qr">
                <div class="footer-label-below-titles">Que tal assinar seu plano pelo whatsapp?</div>
                <div class="footer-label-below-infos">Abra e aponte a câmera do seu celular no QR code.</div>
                <dsw-icon icon="ic_sp_xl" url="assets/img/qrcode.svg"></dsw-icon>
              </div>
              <div class="first-below-whats">
                <dsw-icon icon="ic_sp_sm" url="assets/img/icon_whatsapp.svg"></dsw-icon>
                <dsw-paragraph appearance="paragraph-lr" text="Clique aqui e fale com nosso canal de vendas"></dsw-paragraph>
              </div>
            </li>
            {/* 2 */}
            <li>
              <div>
                <div class="footer-label-below-titles">
                  Ou se preferir, assine pelos telefones:
                  <br />
                  (exclusivo para vendas)
                </div>
                <div class="footer-label-below-infos">
                  Horário de atendimento:
                  <br />
                  Segunda a Domingo 08:00 às 21:00h
                </div>
                <div class="footer-below-infos">
                  <dsw-icon icon="ic_sp_sm" url="assets/img/icon_phone.svg"></dsw-icon>
                  <span>
                    <div class="footer-label-below-titles">3003-7367</div>
                    <div class="footer-label-below-infos">Capitais e regiões metropolitanas</div>
                  </span>
                </div>
                <div class="footer-below-infos">
                  <dsw-icon icon="ic_sp_sm" url="assets/img/icon_phone.svg"></dsw-icon>
                  <span>
                    <div class="footer-label-below-titles">0800 721 7367</div>
                    <div class="footer-label-below-infos">Demais localidades</div>
                  </span>
                </div>
              </div>
            </li>
            {/* 3 */}
            <li>
              <div>
                <div class="footer-label-below-titles">Central de relacionamento:</div>
                <div class="footer-label-below-infos">
                  Horário de atendimento:
                  <br />
                  Segunda a Domingo 08:00 às 21:00h
                </div>
                <div class="footer-below-infos-secondary">
                  <div>
                    <div class="footer-label-below-phones">4002 1552</div>
                    <div class="footer-label-below-infos">(Demais localidades)</div>
                  </div>
                  <div class="vertical-divider"></div>
                  <div>
                    <div class="footer-label-below-phones">0800 015 0252</div>
                    <div class="footer-label-below-infos">(Demais localidades)</div>
                  </div>
                </div>
                <div class="footer-label-below-titles">Ouvidoria:</div>
                <div class="footer-label-below-phones">0800 723 22</div>
                <div class="footer-label-below-infos">(Necessário ter o número do protocolo de atendimento)</div>
              </div>
            </li>
            {/* 4 */}
            <li>
              <div>
                <div class="footer-label-below-titles">Sac:</div>
                <div class="footer-below-infos-secondary">
                  <div class="footer-label-below-phones">0800 723 22</div>
                  <div class="vertical-divider"></div>
                  <div>
                    <div class="footer-label-below-phones">0800 722 0270</div>
                    <div class="footer-label-below-infos">(Deficientes auditivos)</div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </footer>
    );
  }

}
