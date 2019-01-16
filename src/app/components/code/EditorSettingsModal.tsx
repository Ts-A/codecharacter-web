import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { themes } from 'app/components/code/Editor';
import { SidePanelTab } from 'app/reducers/Dashboard'
import * as styles from 'app/styles/Modal.module.css';
import classnames from 'classnames';
import * as React from 'react';
import { Button, Col, FormGroup, Grid, Row } from 'react-bootstrap';

// tslint:disable-next-line:variable-name
export class EditorSettingsModal extends React.Component<EditorSettingsModal.Props, {}> {
  public render() {
    const {
      closeSidePanelTab,
      sidePanelTab,
      fontSize,
      changeFontSize,
      theme,
      changeTheme,
    } = this.props;
    const fontSizeOptions = [];
    for (let i = 8; i <= 40; i += 2) {
      fontSizeOptions.push(i);
    }
    return (
      <Grid
        fluid={true}
        className={classnames(styles.Modal)}
        style={{
          opacity: sidePanelTab === SidePanelTab.EDITOR_SETTINGS ? 1 : 0,
          transform: sidePanelTab === SidePanelTab.EDITOR_SETTINGS ? 'translateY(0)' : 'translateY(-100vh)',
        }}
      >
        <Row className="justify-content-between py-2 pl-3">
          <Col className="text-light my-auto">SETTINGS</Col>
          <Col>
            <Button
              bsSize="xsmall"
              onClick={() => closeSidePanelTab()}
            >
              <FontAwesomeIcon icon={faTimes} color={'white'} />
            </Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12} className={classnames('mb-1', styles.setting)}>
            <div className="font-weight-bold py-2">Font Size</div>
            <p>The size of text in the code editor</p>
            <FormGroup controlId="fontSize">
              <select
                className={classnames('form-control', styles.formControlSelect, 'font-size-control')}
                value={fontSize}
                onChange={(e) => changeFontSize(Number(e.target.value))}
              >
                {fontSizeOptions.map((font: number) => (
                  <option value={font} key={font}>
                    {font}
                  </option>
                ))}
              </select>
            </FormGroup>
          </Col>
          <Col sm={12} className={classnames('mb-1', styles.setting)}>
            <div className="font-weight-bold py-2">Editor Theme</div>
            <p>The syntax and overall theme of the code editor</p>
            <FormGroup controlId="theme">
              <select
                className={classnames('form-control', styles.formControlSelect, 'theme-control')}
                value={theme}
                onChange={(e) => changeTheme(e.target.value)}
              >
                {themes.map((themeValue: string) => (
                  <option value={themeValue} key={themeValue}>
                    {themeValue}
                  </option>
                ))}
              </select>
            </FormGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export namespace EditorSettingsModal {
  export interface StateProps {
    fontSize: number;
    theme: string;
    sidePanelTab: SidePanelTab;
  }

  export interface DispatchProps {
    changeFontSize: (fontSize: number) => void;
    changeTheme: (theme: string) => void;
    closeSidePanelTab: () => void
    openSidePanelTab: () => void
  }

  export type Props = {} & StateProps & DispatchProps;
}
