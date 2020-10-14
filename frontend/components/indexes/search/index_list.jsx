import React from 'react';
import { Link } from 'react-router-dom';
import IndexListItem from './index_list_item';

class IndexList extends React.Component {
    constructor(props) {
        super(props);

        this.keyword = this.props.location.pathname.split("=")[1];

        this.getEventGroups = this.getEventGroups.bind(this);
        this.includesKeyword = this.includesKeyword.bind(this);
        this.keywordSort = this.keywordSort.bind(this);
    }

    componentDidMount() {
        if (Object.values(this.props.events).length === 0 && Object.values(this.props.groups).length === 0) {
            this.props.searchEntities(this.keyword)
                .then(() => this.getEventGroups());   
        }
    }

    getEventGroups() {
        Object.values(this.props.events).forEach((event) => {
            this.props.fetchGroup(event.group_id);
        });
    }

    includesKeyword(name) {
        return name.toLowerCase().split(' ').includes(this.keyword);
    }

    keywordSort(results, callback) {
        if (!callback) {
            callback = (idx_item1, idx_item2) => {
                if (this.includesKeyword(idx_item1.name) && 
                    !this.includesKeyword(idx_item2.name)) {
                    return 0;
                } else {
                    return 1;
                }
            };
        }

        let idx_list = results.slice();

        if (idx_list.length < 2) return idx_list;

        let pivot = idx_list[0];
        let left = idx_list.slice(1).filter(function (ele) {
            return callback(ele, pivot) !== 1;
        });
        let right = idx_list.slice(1).filter(function (ele) {
            return callback(ele, pivot) === 1;
        });

        left = this.keywordSort(left, callback);
        right = this.keywordSort(right, callback);

        return left.concat([pivot], right);   
    }

    render() {
        let results = [];
        const events = Object.values(this.props.events);
        const groups = Object.values(this.props.groups);

        results = results.concat(events, groups);
        results = this.keywordSort(results);

        if (results.length === 0) {
            return (
              <div className="failed-search">
                <h1>Sorry, there were no results</h1>
                <p>Try searching for something else.</p>
              </div>
            );
        }

      return (
        <div className="search-idx-pg">
          <ul className="search-idx">
            {results.map(result => {
                let type = "group"
                // let groupName = ""
                if (!result.creator_id) {
                    type = "event";
                    // this.props.fetchGroup(result.group_id)
                    //     .then(action => groupName = action.group.name)
                };
                return (
                    <IndexListItem
                        entity={result}
                        type={type}
                        history={this.props.history}
                        key={`result-${result.id}`}
                        groups={this.props.groups}
                        // fetchGroup={this.props.fetchGroup}
                        // groupName={groupName}
                    />
                );
            })}
          </ul>
        </div>
      );
    }
}

export default IndexList;