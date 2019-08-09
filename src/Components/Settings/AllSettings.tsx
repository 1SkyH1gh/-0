import * as React from "react";
import {Component} from "react";

export interface AllSettingsProps {

}

export class AllSettings<AllSettingsProps> extends Component{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return(
            <div className="allSettingsContainer">
                <div className="sidebarAllSettings">
                  <div className="languageSettings">language</div>
                    <div className="privateSettings">private settings</div>
                    <div className="globalSettings">global</div>
                    <div className="interfaceSettings">interface</div>
                </div>
                <div className="currentSettingsPageMain">

                </div>
            </div>
        )
    }
}