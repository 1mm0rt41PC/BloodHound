import React from 'react';
import { Highlighter } from 'react-bootstrap-typeahead';
import styles from './SearchRow.module.css';
import clsx from 'clsx';

const SearchRow = ({ item, search }) => {
    let searched;
    if (search.includes(':')) {
        searched = search.split(':')[1];
    } else {
        searched = search;
    }

    let type = item.type;
    let icon = {};

    const selectName = () => {
        if (item.hasOwnProperty("name")){
            return item["name"];
        }else if (item.hasOwnProperty("azname")){
            return item["azname"];
        }else{
            return item["objectid"]
        }
    }

    switch (type) {
        case 'Group':
            if (item.hasOwnProperty("bl-icon")){
                icon.className = 'fa '+ item["bl-icon"];
            }else{
                icon.className = 'fa fa-users';
            }
            break;
        case 'User':
            icon.className = 'fa fa-user';
            break;
        case 'Computer':
            icon.className = 'fa fa-desktop';
            break;
        case 'Domain':
            icon.className = 'fa fa-globe';
            break;
        case 'GPO':
            icon.className = 'fa fa-list';
            break;
        case 'OU':
            icon.className = 'fa fa-sitemap';
            break;
        case 'CA':
            icon.className = 'fa fa-university';
            break;
        case 'CertificateTemplate':
            icon.className = 'fa fa-id-card';
            break;
        case 'Container':
            icon.className = 'fa fa-box'
            break
        case 'AZUser':
            icon.className = 'fa fa-user';
            break;
        case 'AZGroup':
            icon.className = 'fa fa-users';
            break;
        case 'AZTenant':
            icon.className = 'fa fa-cloud';
            break;
        case 'AZSubscription':
            icon.className = 'fa fa-key';
            break;
        case 'AZResourceGroup':
            icon.className = 'fa fa-cube';
            break;
        case 'AZManagementGroup':
            icon.className = 'fa fa-cube';
            break;
        case 'AZVM':
            icon.className = 'fa fa-desktop';
            break;
        case 'AZDevice':
            icon.className = 'fa fa-desktop';
            break;
        case 'AZContainerRegistry':
            icon.className = 'fa fa-box-open';
            break;
        case 'AZAutomationAccount':
            icon.className = 'fa fa-cogs';
            break;
        case 'AZLogicApp':
            icon.className = 'fa fa-sitemap';
            break;
        case 'AZFunctionApp':
            icon.className = 'fa fa-bolt-lightning';
            break;
        case 'AZWebApp':
            icon.className = 'fa fa-object-group';
            break;
        case 'AZManagedCluster':
            icon.className = 'fa fa-cubes';
            break;
        case 'AZVMScaleSet':
            icon.className = 'fa fa-server';
            break;
        case 'AZKeyVault':
            icon.className = 'fa fa-lock';
            break;
        case 'AZApp':
            icon.className = 'fa fa-window-restore';
            break;
        case 'AZServicePrincipal':
            icon.className = 'fa fa-robot';
            break;
        case 'AZRole':
            icon.className = 'fa fa-window-restore'
            break
        default:
            if (item.hasOwnProperty("bl-icon")){
                icon.className = 'fa '+ item["bl-icon"];
            }else{
                icon.className = 'fa fa-question';
                type = 'Base';
            }
            break;
    }

    icon.style = { color: appStore.highResPalette.iconScheme[type].color };
    icon.className = clsx(icon.className, styles.spacing);

    let name = item.name || item.objectid;

    return (
        <>
            <span>
                <i {...icon} />
            </span>
            <Highlighter matchElement='strong' search={searched}>
                {selectName()}
            </Highlighter>
        </>
    );
};

SearchRow.propTypes = {};
export default SearchRow;
