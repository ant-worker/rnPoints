# technology for fun :)

这里只是基于 React-native 写的一些好玩的API 组件库。现在包括以下组件功能：

1、redux数据流
2、...



## 接口文档
为了更好的模拟功能，调用了github的数据接口,如还需要查找其他接口可以访问 Github 接口文档 [https://developer.github.com/v3/][1]。

### 搜索接口

**接口URL**  

[https://api.github.com/search/repositories?q=api&page=1&per_page=50][2]

**请求类型**  

get

**请求参数**  

   参数名    |     类型   |   是否必需    |   说明    
------------ | -------------  | -------------  | -------------
 q     |String   |是  | 搜索内容   
 page    |Number |是    | 页数   
 per_page     |Number  |是   | 每页条数   
 type     |Number  |否   | 搜索类型: Repositories(默认)、 code、commits、... 
 ...     |  |  |  



**返回结果**  

```javascript
{
	total_count: 359724,
	incomplete_results: false,
	items: [
		{
			id: 15511291,
			name: "api",
			full_name: "jsdelivr/api",
			owner: {
				login: "jsdelivr",
				id: 6191378,
				avatar_url: "https://avatars.githubusercontent.com/u/6191378?v=3",
				gravatar_id: "",
				url: "https://api.github.com/users/jsdelivr",
				html_url: "https://github.com/jsdelivr",
				followers_url: "https://api.github.com/users/jsdelivr/followers",
				following_url: "https://api.github.com/users/jsdelivr/following{/other_user}",
				gists_url: "https://api.github.com/users/jsdelivr/gists{/gist_id}",
				starred_url: "https://api.github.com/users/jsdelivr/starred{/owner}{/repo}",
				subscriptions_url: "https://api.github.com/users/jsdelivr/subscriptions",
				organizations_url: "https://api.github.com/users/jsdelivr/orgs",
				repos_url: "https://api.github.com/users/jsdelivr/repos",
				events_url: "https://api.github.com/users/jsdelivr/events{/privacy}",
				received_events_url: "https://api.github.com/users/jsdelivr/received_events",
				type: "Organization",
				site_admin: false
			},
			private: false,
			html_url: "https://github.com/jsdelivr/api",
			description: "API for public CDNs",
			fork: false,
			url: "https://api.github.com/repos/jsdelivr/api",
			forks_url: "https://api.github.com/repos/jsdelivr/api/forks",
			keys_url: "https://api.github.com/repos/jsdelivr/api/keys{/key_id}",
			collaborators_url: "https://api.github.com/repos/jsdelivr/api/collaborators{/collaborator}",
			teams_url: "https://api.github.com/repos/jsdelivr/api/teams",
			hooks_url: "https://api.github.com/repos/jsdelivr/api/hooks",
			issue_events_url: "https://api.github.com/repos/jsdelivr/api/issues/events{/number}",
			events_url: "https://api.github.com/repos/jsdelivr/api/events",
			assignees_url: "https://api.github.com/repos/jsdelivr/api/assignees{/user}",
			branches_url: "https://api.github.com/repos/jsdelivr/api/branches{/branch}",
			tags_url: "https://api.github.com/repos/jsdelivr/api/tags",
			blobs_url: "https://api.github.com/repos/jsdelivr/api/git/blobs{/sha}",
			git_tags_url: "https://api.github.com/repos/jsdelivr/api/git/tags{/sha}",
			git_refs_url: "https://api.github.com/repos/jsdelivr/api/git/refs{/sha}",
			trees_url: "https://api.github.com/repos/jsdelivr/api/git/trees{/sha}",
			statuses_url: "https://api.github.com/repos/jsdelivr/api/statuses/{sha}",
			languages_url: "https://api.github.com/repos/jsdelivr/api/languages",
			stargazers_url: "https://api.github.com/repos/jsdelivr/api/stargazers",
			contributors_url: "https://api.github.com/repos/jsdelivr/api/contributors",
			subscribers_url: "https://api.github.com/repos/jsdelivr/api/subscribers",
			subscription_url: "https://api.github.com/repos/jsdelivr/api/subscription",
			commits_url: "https://api.github.com/repos/jsdelivr/api/commits{/sha}",
			git_commits_url: "https://api.github.com/repos/jsdelivr/api/git/commits{/sha}",
			comments_url: "https://api.github.com/repos/jsdelivr/api/comments{/number}",
			issue_comment_url: "https://api.github.com/repos/jsdelivr/api/issues/comments{/number}",
			contents_url: "https://api.github.com/repos/jsdelivr/api/contents/{+path}",
			compare_url: "https://api.github.com/repos/jsdelivr/api/compare/{base}...{head}",
			merges_url: "https://api.github.com/repos/jsdelivr/api/merges",
			archive_url: "https://api.github.com/repos/jsdelivr/api/{archive_format}{/ref}",
			downloads_url: "https://api.github.com/repos/jsdelivr/api/downloads",
			issues_url: "https://api.github.com/repos/jsdelivr/api/issues{/number}",
			pulls_url: "https://api.github.com/repos/jsdelivr/api/pulls{/number}",
			milestones_url: "https://api.github.com/repos/jsdelivr/api/milestones{/number}",
			notifications_url: "https://api.github.com/repos/jsdelivr/api/notifications{?since,all,participating}",
			labels_url: "https://api.github.com/repos/jsdelivr/api/labels{/name}",
			releases_url: "https://api.github.com/repos/jsdelivr/api/releases{/id}",
			deployments_url: "https://api.github.com/repos/jsdelivr/api/deployments",
			created_at: "2013-12-29T16:32:58Z",
			updated_at: "2017-01-01T20:14:51Z",
			pushed_at: "2016-10-25T17:40:42Z",
			git_url: "git://github.com/jsdelivr/api.git",
			ssh_url: "git@github.com:jsdelivr/api.git",
			clone_url: "https://github.com/jsdelivr/api.git",
			svn_url: "https://github.com/jsdelivr/api",
			homepage: "http://api.jsdelivr.com",
			size: 329,
			stargazers_count: 92,
			watchers_count: 92,
			language: "JavaScript",
			has_issues: true,
			has_downloads: true,
			has_wiki: false,
			has_pages: false,
			forks_count: 25,
			mirror_url: null,
			open_issues_count: 6,
			forks: 25,
			open_issues: 6,
			watchers: 92,
			default_branch: "master",
			score: 59.09266
		},

		...
		...

	]
}
```

## 注意
仿造当前日常用的APP `知乎`、`搜狐新闻`等。随便玩:)



  [1]: https://developer.github.com/v3/
  [2]: https://api.github.com/search/repositories?q=api&page=2&per_page=3