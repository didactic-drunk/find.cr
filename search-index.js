crystal_doc_search_index_callback({"repository_name":"find","body":"# find.cr\n\n![SplayTreeMap CI](https://img.shields.io/github/workflow/status/wyhaines/find.cr/Find.cr%20CI?style=for-the-badge&logo=GitHub)\n[![GitHub release](https://img.shields.io/github/release/wyhaines/find.cr.svg?style=for-the-badge)](https://github.com/wyhaines/find.cr/releases)\n![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/wyhaines/find.cr/latest?style=for-the-badge)\n\nThis shard is inspired by the Ruby module:\n\nhttps://ruby-doc.org/stdlib-2.7.2/libdoc/find/rdoc/index.html\n\nIt implements a simple API for the top down traversal of a set of paths.\n\nThe API is simple.\n\n```\nrequire 'find'\n\ntotal_size = 0\n\nFind.find(ENV[\"HOME\"]) do |path|\n  if File.directory?(path)\n    if File.basename(path).start_with?('.')\n      Find.prune       # Don't look any further into this directory.\n    else\n      next\n    end\n  end\n\n  total_size += FileTest.size(path)\nend\n```\n\n![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/wyhaines/find.cr?style=for-the-badge)\n![GitHub issues](https://img.shields.io/github/issues/wyhaines/find.cr?style=for-the-badge)","program":{"html_id":"find/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"find","program":true,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"find/Find","path":"Find.html","kind":"module","full_name":"Find","name":"Find","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/find.cr","line_number":1,"url":null}],"repository_name":"find","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[{"id":"find(*paths,&)-class-method","html_id":"find(*paths,&)-class-method","name":"find","doc":null,"summary":null,"abstract":false,"args":[{"name":"paths","doc":null,"default_value":"","external_name":"paths","restriction":""}],"args_string":"(*paths, &)","args_html":"(*paths, &)","location":{"filename":"src/find.cr","line_number":8,"url":null},"def":{"name":"find","args":[{"name":"paths","doc":null,"default_value":"","external_name":"paths","restriction":""}],"double_splat":null,"splat_index":0,"yields":1,"block_arg":null,"return_type":"","visibility":"Public","body":"paths.each do |path|\n  search_path = [path]\n  while !search_path.empty?\n    file = search_path.shift\n    begin\n      if file.nil? || (!(File.exists?(file)))\n        next\n      end\n    rescue\n      next\n    end\n    skip = yield file.dup\n    if skip == Find::Skip\n      next\n    end\n    if File.directory?(file)\n      begin\n        fs = Dir.children(file)\n      rescue\n        next\n      end\n      fs.sort.reverse.each do |f|\n        search_path.unshift(File.join(file, f))\n      end\n    end\n  end\nend"}}],"constructors":[],"instance_methods":[],"macros":[{"id":"prune-macro","html_id":"prune-macro","name":"prune","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","location":{"filename":"src/find.cr","line_number":4,"url":null},"def":{"name":"prune","args":[],"double_splat":null,"splat_index":null,"block_arg":null,"visibility":"Public","body":"    next Find::Skip\n  "}}],"types":[{"html_id":"find/Find/Skip","path":"Find/Skip.html","kind":"struct","full_name":"Find::Skip","name":"Skip","abstract":false,"superclass":{"html_id":"find/Struct","kind":"struct","full_name":"Struct","name":"Struct"},"ancestors":[{"html_id":"find/Struct","kind":"struct","full_name":"Struct","name":"Struct"},{"html_id":"find/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"find/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/find.cr","line_number":2,"url":null}],"repository_name":"find","program":false,"enum":false,"alias":false,"aliased":null,"aliased_html":null,"const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"find/Find","kind":"module","full_name":"Find","name":"Find"},"doc":null,"summary":null,"class_methods":[],"constructors":[{"id":"new-class-method","html_id":"new-class-method","name":"new","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","args_html":"","location":{"filename":"src/find.cr","line_number":2,"url":null},"def":{"name":"new","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"x = allocate\nif x.responds_to?(:finalize)\n  ::GC.add_finalizer(x)\nend\nx\n"}}],"instance_methods":[],"macros":[],"types":[]}]}]}})