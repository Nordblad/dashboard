import * as React from 'react';
import Bars from './Bars'
// import { Header, MainSection } from '../../components';

export namespace DashboardContainer {
    export interface Props {
    }

    export interface State {
        widgets: Widget[]
    }
}

export interface Widget {
    id: string,
    widgetType: string,
    props: object
}

const widgetComponents = {
    bars: (props) => <div>Bars</div>
}

export default class DashboardContainer extends React.Component<DashboardContainer.Props, DashboardContainer.State> {
    state = {
        widgets: [
            {
                id: 'WID1',
                widgetType: 'bars',
                props: { questionId: 321, label: 'By group' }
            }
        ]
    }
    render() {
        const { children } = this.props
        const { widgets } = this.state
        return (
            <div className="DashboardContainer">
                {widgets.map((w, i) => (
                    <div key={w.id}>{w.widgetType}</div>
                ))}
            </div>
        )
    }
}