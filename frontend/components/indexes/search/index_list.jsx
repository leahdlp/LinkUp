import React from 'react';
import IndexListItem from './index_list_item';

class IndexList extends React.Component {
    constructor(props) {
        super(props);

        this.includesKeyword = this.includesKeyword.bind(this);
        this.keywordSort = this.keywordSort.bind(this);
    }

    componentDidMount() {
        console.log('MOUNTINGGGGGGGGGG')
        // this.props.searchEntities(this.props.keyword)
            // .then(action => {
                console.log(this.props.keyword)
                console.log(this.props.events)
                Object.values(this.props.events).forEach(event => {
                    console.log('FETCHINGOGGG===', event)
                    this.props.fetchGroup(event.group_id)
                })
            // })
    }

    includesKeyword(name) {
        return name.toLowerCase().split(' ').includes(this.props.keyword);
    }

    keywordSort(results, callback) {
        if (!callback) {
            callback = (idx_item1, idx_item2) => {
                // console.log(idx_item1.name)
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
        console.log('EVENTSSSSSSSSSSSSS', events)
        const groups = Object.values(this.props.groups);
        console.log("GROUPSSSSSSSSSSSSS", groups);
        // results = Object.values(Object.assign(events, groups));
        // console.log('results', results)


        // if (events.length === 0 || groups.length === 0) return null;

        results = results.concat(events, groups);
        console.log(results)
        results = this.keywordSort(results);

        if (results.length === 0) {
            return (
                <div>
                    <h1>Sorry There were no results</h1>
                    <p>try searching for something else</p>
                </div>
            )
        }

      return (
        <div className="search-idx-pg">
          <ul className="search-idx">
            {results.map(result => {
                // console.log('RESULTTTTTTTTTT', result)
                let type = "event";
                if (result.creator_id) type = "group";
                return (
                    <IndexListItem
                        entity={result}
                        type={type}
                        history={this.props.history}
                        key={`result-${result.id}`}
                        groups={this.props.groups}
                        fetchGroup={this.props.fetchGroup}
                    />
                );
            })}
          </ul>
        </div>
      );
    }
}

export default IndexList;